/*
  Warnings:

  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `SocialUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SocialUser" DROP CONSTRAINT "SocialUser_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password";

-- DropTable
DROP TABLE "SocialUser";
