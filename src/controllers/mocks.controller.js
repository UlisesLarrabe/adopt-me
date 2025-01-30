import { faker } from "@faker-js/faker";
import { petsService } from "../services/index.js";
import { usersService } from "../services/index.js";
import { createHash } from "../utils/index.js";
import PetDTO from "../dto/Pet.dto.js";

const mockUsers = async (quantity) => {
  for (let i = 0; i < quantity; i++){
      let isAdmin = i % 2 === 0
      const user = {
          first_name: faker.person.firstName(),
          last_name: faker.person.lastName(),
          email: faker.internet.email(),
          password: await createHash("coder123"),
          role: isAdmin ? "admin" : "user",
          pets:[]
      };
      await usersService.create(user);
  }
}

const createMockUsers = async(req, res) => {
  let quantity = 50
  await mockUsers(quantity);
  res.send({status:"success",message:"users created"})
}

export const mockPets = async (quantity) => {
  for (let i = 0; i < quantity; i++){
      const pet = PetDTO.getPetInputFrom({
          name: faker.animal.dog(),
          specie: faker.animal.type(),
          birthDate: faker.date.past()
      });
      await petsService.create(pet);
  }
}


const createMockPets = async(req, res) => {
  let quantity = 100
  await mockPets(quantity);
  res.send({status:"success",message:"pets created"})
}

const generateData = async (req, res) => {
  const { quantityUsers, quantityPets } = req.body;
      await mockUsers(quantityUsers),
      await mockPets(quantityPets) 
      res.send({ status: "success"})
}

export default {
  createMockPets,
  createMockUsers,
  generateData
}