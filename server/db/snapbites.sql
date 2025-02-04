CREATE TABLE "profile" (
  "id" integer PRIMARY KEY,
  "username" varchar(255),
  "password" varchar(255)
);

CREATE TABLE "macro_budget" (
  "id" integer PRIMARY KEY,
  "profile" integer,
  "calories" integer,
  "carbohydrates" integer,
  "fats" integer,
  "proteins" integer
);

CREATE TABLE "meal" (
  "id" integer PRIMARY KEY,
  "image_url" varchar(MAX),
  "name" varchar(255),
  "weight_est" integer,
  "calories" integer,
  "carbohydrates" integer,
  "fats" integer,
  "proteins" integer,
  "fiber" integer,
  "time_eaten" datetime,
  "is_shareable" boolean,
  "favorite" integer,
  "profile" integer
);

CREATE TABLE "goals" (
  "id" integer PRIMARY KEY,
  "profile" integer,
  "name" varchar(255),
  "description" text,
  "created" datetime,
  "finish_line" datetime
);

CREATE TABLE "favorites" (
  "id" integer PRIMARY KEY,
  "profile" integer
);

ALTER TABLE "profile" ADD FOREIGN KEY ("id") REFERENCES "goals" ("profile");
ALTER TABLE "profile" ADD FOREIGN KEY ("id") REFERENCES "macro_budget" ("profile");
ALTER TABLE "profile" ADD FOREIGN KEY ("id") REFERENCES "favorites" ("profile");
ALTER TABLE "profile" ADD FOREIGN KEY ("id") REFERENCES "meal" ("profile");
ALTER TABLE "favorites" ADD FOREIGN KEY ("id") REFERENCES "meal" ("favorite");
