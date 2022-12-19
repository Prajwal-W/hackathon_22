# hackathon_22

Daily Status Reporting Project is broken up as 4 problem statements. You can implement as many working solutions for problem statements as you can. You can use same or different tech stack/languages for coding each problem statement.
Problem Statement 1 - Project Micro App
Build an application that can be run as a container on the cloud for creating/updating/deleting a project . The functionality of the application is:
Allow user to add, update, delete a project.
Each project should have:
Project Name
Project Start Date
Project End Date
Project Manager Name
Project Manager Email
Daily Status Report Mailing List
Persist all status items in the database
Problem Statement 2 - Team Micro App
Build an application that can be run as a container on the cloud for creating/updating/deleting a team in the project.
The functionality of the application is:
Allow user to add, update, delete a team in a selected project (Created in Problem Statement 1)
Each team should have:
Team Name
Team Start Date
Team End Date
Team Lead Name
Team Lead Email
List of team members
Persist all teams in the database
Problem Statement 3 - Status Micro App
Build an application that can be run as a container on the cloud for creating/updating/deleting daily status for each project by a team member
The functionality of the application is:
Allow user to select themselves from list of team members in the from a list of teams (Problem Statement 2). Then let them add, update, delete daily status for themselves
Each status item should have:
Ticket ID
Hours Spent
Status – In Progress/Blocked/Completed/PTO/In Review
Comments
Persist all status items in the database
Problem Statement 4 - Email Report Micro App
Build an application that can be run as a container on the cloud for sending out daily status emails for each project.
The functionality of the application is:
Every weekday at 10pm send out the daily status email based on a template so that all emails look identical.
The email subject should be Daily Status Report of (Project Name) for (Date).
The emails should be sent to all team members in that project and also to recipients updated for each project (Problem Statement 1).
