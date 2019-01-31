CREATE DATABASE "giphy_search_favorites";

-- Favorite table
CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "category_id" INT DEFAULT 6
);

INSERT INTO "favorites" ("url")
VALUES ('https://media.giphy.com/media/HKx5p4APGBxi8/giphy.gif');


-- Each favorite image can be assigned 1 of the following categories as a Foreign Key
-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

INSERT INTO "category" ("name")
VALUES ('funny'), ('movies/tv'), ('minnesota'), ('nsfw'), ('animal'), ('pick one');
