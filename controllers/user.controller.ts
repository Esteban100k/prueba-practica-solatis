import { Request, Response } from "express";
import { User } from "../models/defines/User";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export async function createUser(req: Request, res: Response) {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.create({
      firstName,
      lastName,
      email,
      password
    });
    return res.status(200).json({
      data: user,
      message: "Usuario creado con exito",
      status: 200
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      attributes: ["id", "firstName", "lastName", "email", "password"],
      where: { email: email },
    });

    if (user != null && user != undefined) {
      if (!bcrypt.compareSync(password, user.password)) {
        return res.status(500).send("La contraseña es incorrecta");
      }

      var token = jwt.sign({ user: user }, "authorization");
      return res.status(200).send({
        user: user,
        token: token
      });
    }
    else {
      res.status(500).send({ message: "El usuario no existe" })
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    const { firstName, lastName, email } = req.body;
    const user = await User.findOne({ where: { email: email } });

    if (user != null && user != undefined) {
      user.firstName = firstName;
      user.lastName = lastName;
      await user.save();
      res.json({
        data: user,
        message: "Usuario actualizado con exito",
        status: 200
      });
    }
    else {
      return res.status(500).json({
        data: null,
        message: "El usuario no se encuentra registrado en el sistema",
        status: 500
      });
    }
  } catch (error: any) {
    return res.status(500).json({
      data: null,
      message: "Ha ocurrido un error en el servidor",
      status: 500
    });
  }
};

export async function deleteUser(req: Request, res: Response) {
  try {
    const { id } = req.body;
    const user = await User.findOne({ where: { id: id } });
    if (user != null && user != undefined) {
      let id = user.id
      await User.destroy({
        where: {
          id,
        },
      });
      return res.sendStatus(200);
    }
    else {
      return res.status(500).json({
        data: null,
        message: "Ha ocurrido un error en el servidor",
        status: 500
      });
    }
  } catch (error: any) {
    console.error(error)
    return res.status(500).json({
      data: null,
      message: "Ha ocurrido un error en el servidor",
      status: 500
    });
  }
};