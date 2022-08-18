import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("schools").del();

  await knex("schools").insert([
    {
      school_id: "596123e0-5e5c-4b78-89a4-e761d5cee055",
      name: "Örnsköldsvik School №82",
      address: "8 Barnett Park",
      director_id: null,
    },
    {
      school_id: "a4d706cb-7b85-4384-8c94-362b64734ccc",
      name: "Yangju School №72",
      address: "532 Sachs Avenue",
      director_id: null,
    },
    {
      school_id: "1a0ab108-1868-4716-adc4-3f6630353e3d",
      name: "Duba School №27",
      address: "83 Spenser Avenue",
      director_id: null,
    },
    {
      school_id: "61dfbae1-49d9-4b80-be55-51428dfd71aa",
      name: "Toride School №5",
      address: "291 Badeau Alley",
      director_id: null,
    },
    {
      school_id: "4e9ee8db-7d6a-4539-bad7-252c571da3d7",
      name: "Tanumshede School №61",
      address: "19 Eastwood Parkway",
      director_id: null,
    },
    {
      school_id: "faefac52-a798-4568-b0b5-b229cf1c9aaf",
      name: "Široki Brijeg School №42",
      address: "06453 Basil Way",
      director_id: null,
    },
  ]);
}
