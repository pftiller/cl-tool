CREATE TABLE `sections` (
	`id` INT(1) NOT NULL AUTO_INCREMENT,
	`section_name` TEXT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `entries` (
	`section_id` INT(1) NOT NULL,
	`entry` TEXT(1)
);

ALTER TABLE `entries` ADD CONSTRAINT `entries_fk0` FOREIGN KEY (`section_id`) REFERENCES `sections`(`id`);


