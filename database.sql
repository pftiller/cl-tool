CREATE DATABASE cover_leter;

CREATE TABLE sections (
   	id SERIAL PRIMARY KEY,
    section_name VARCHAR(25)
);

CREATE TABLE entries (
    id INT,
    decimal INT,
    entry TEXT,
    FOREIGN KEY (id) REFERENCES sections(id)
);

INSERT INTO sections (section_name) 
VALUES  ('Salutation'),
		('Intro'),
		('Technical Skills'),
		('Professional Background'),
		('Soft Skills'),
		('Outro');

INSERT INTO entries (id, decimal, entry) 
VALUES  (1, 1, 'Dear Hiring Manager'),
		(1, 1, 'To Whom It May Concern'),
		(2, 1, 'I was excited to recently learn of the opening for a ***** offered through *****.'),
		(2, 1, 'I am writing you to express my interest in this position.'),
		(2, 2, 'I believe I am the type of qualified candidate that you are seeking.'),
		(2, 2, 'I believe my background renders me an excellent candidate for this position.'),
		(2, 2, 'I believe that my unique talents and past experiences render me an excellent candidate for this position.'),
		(2, 2, 'I am confident that I possess the necessary skills and experience to thrive in this position.'),
		(2, 2, 'I am convinced that I possess the necessary skills to complete the duties and responsibilities of the ***** position.'),
		(2, 2, 'I believe I have the skills, knowledge and experience to succeed in this position.'),
		(2, 3, 'It would be a great opportunity to have the chance to share my skills and experience with the committed staff at *****, an entity whose work I greatly admire.'),
		(2, 3, 'I would highly value the opportunity to share my unique gifts with the talented and dynamic staff at *****.'),
		(2, 3, 'I am confident that I possess the necessary abilities and competencies to successfully execute the duties and expectations required of this position.'),
		(2, 3, 'I believe I have the necessary experience, skills, and initiative to excel in this position.'),
		(2, 4, 'I am excited by this opportunity in particular, because I am motivated to find work at an organization whose values I share, such as *****'),
		(3, 1, 'I recently completed a 20-week full-stack engineering course through Prime Digital Academy, an experience that has equipped me with necessary to perform the duties of this position.'),
		(3, 1, 'I recently completed an immersion bootcamp for full-stack coding at Prime Digital Academy, which has armed me with the skills to make immediate contributions as a full-time programmer.'),
		(3, 2, 'This experience helped shape me into a versatile software developer.'),
		(3, 3, 'Over the course of this program, I gained further exposure and hands-on experience with relevant technologies used by modern organizations to build complex software and applications.'),
		(3, 4, 'In addition to developing further proficiency in HTML5, CSS3 and JavaScript, languages  I have been working in for several years, I was able to gain relevant experience designing and building full-stack, CRUD web applications utilizing popular technologies, libraries and frameworks, including Node.js, Express, React, AngularJS, Angular Material, jQuery, SQL & PostgresSQL, Chart.js, Passport.js, not to mention numerous APIs.'),
		(3, 5, 'In combination with my past experience with PHP and Wordpress development, as well as other content management systems, this experience has given me the confidence to seek full-time employment as a web developer'),
		(4, 1, 'Although this position would represent my first permanent, full-time job as a developer, I believe I have a relevant professional background that would prove helpful in this role.'),
		(4, 2, 'With over 5 years of professional experience in digital marketing, I have gained invaluable experience, performing data analysis, designing webpages and applications, troubleshooting tracking issues, executing marketing strategies and supporting new business objectives.'),
		(4, 2, 'With 5 years of professional experience in digital marketing, I have gained deep familiarity with the current digital landscape and possess extensive knowledge of the array of available digital products, technologies, and solutions.'),
		(4, 3, 'I have gained invaluable experience in roles in which I was directly responsible for search engine optimization, web analytics, content marketing, internet advertising, and social media marketing.'),
		(4, 3, 'I have significant experience specializing in SEO, performing regular site audits and updates to abide by technical search engine optimization best practices, including indexing, caching, compressing images and adjusting tags and meta content.'),
		(4, 4, 'I am experienced using the Adobe Creative Suite, which I have used extensively to design graphics, as well as several IDEs, from which I have used to build websites and applications.'),
		(4, 4, 'I am experienced working with Google Analytics and other web analtytics and reporting platforms.
'),
		(5, 1, 'Outside of my skillset and professional background, I believe I have the right type of attributes to do well in this position.'),
		(5, 1, 'Besides my skills and professional background, I believe I possess the type of traits that will serve me well in this position.'),
		(5, 1, 'In addition to my skills and experience, I believe I have the type of soft skills required of the position.'),
		(5, 2, 'I am skilled in conducting research and gathering information.'),
		(5, 2, 'I am highly driven and motivated to learn new things. '),
		(5, 2, 'I enjoy being challenged and tackling difficult projects.'),
		(5, 2, 'I bring creativity, good humor, and passion to all my work.'),
		(5, 2, 'I am friendly and easy to get along with.'),
		(5, 2, 'I am laid-back, but highly motivated and hard-working. '),
		(5, 2, 'I am reliable and dependable.'),
		(5, 2, 'I am committed to getting the job done and doing the job well.'),
		(5, 2, 'I’m in it for more than a paycheck.'),
		(5, 2, 'I am thorough and detail-oriented in all my work and absolutely committed to the completion of any task or project I undertake.'),
		(5, 2, 'I am highly organized and fully capable of juggling multiple tasks and assignments simultaneously.'),
		(5, 2, 'I have had the opportunity to work with people from all different backgrounds and have had success in forming positive, lasting relationships.'),
		(6, 1, 'Altogether, I believe that my skills, along with my past professional experience, render me an exceptional candidate for the ***** position.'),
		(6, 2, 'This position would grant me the opportunity to perform meaningful work and to learn from a talented team of professionals all working toward a common goal.'),
		(6, 3, 'Please look over my resume, which further outlines my qualifications and experiences.'),
		(6, 3, 'I would very much appreciate the chance to sit down and talk further about this exciting opportunity!'),
		(6, 4, 'I thank you for your time and consideration.');



