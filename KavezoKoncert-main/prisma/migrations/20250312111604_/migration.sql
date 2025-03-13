-- CreateTable
CREATE TABLE `koncert` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `performer` VARCHAR(191) NOT NULL,
    `started_at` DATETIME(3) NOT NULL,
    `lenght` INTEGER NOT NULL,
    `fail` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
