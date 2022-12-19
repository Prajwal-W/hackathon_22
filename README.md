# hackathon_22

# Daily Status Reporting Project

Daily Status Reporting Project is broken up as 4 problem statements. You can implement as many working solutions for problem statements as you can. You can use same or different tech stack/languages for coding each problem statement.

## Problem Statement 1 - Project Micro App

Build an application that can be run as a container on the cloud for creating/updating/deleting a project . The functionality of the application is:

1.  Allow user to add, update, delete a project.
2.  Each project should have:

1.  Project Name
2.  Project Start Date
3.  Project End Date
4.  Project Manager Name
5.  Project Manager Email
6.  Daily Status Report Mailing List

4.  Persist all status items in the database

## Problem Statement 2 - Team Micro App

Build an application that can be run as a container on the cloud for creating/updating/deleting a team in the project.  
The functionality of the application is:

1.  Allow user to add, update, delete a team in a selected project (Created in Problem Statement 1)
2.  Each team should have:

1.  Team Name
2.  Team Start Date
3.  Team End Date
4.  Team Lead Name
5.  Team Lead Email
6.  List of team members

4.  Persist all teams in the database

## Problem Statement 3 - Status Micro App

Build an application that can be run as a container on the cloud for creating/updating/deleting daily status for each project by a team member  
The functionality of the application is:

1.  Allow user to select themselves from list of team members in the from a list of teams (Problem Statement 2). Then let them add, update, delete daily status for themselves
2.  Each status item should have:

1.  Ticket ID
2.  Hours Spent
3.  Status – In Progress/Blocked/Completed/PTO/In Review
4.  Comments

4.  Persist all status items in the database

## Problem Statement 4 - Email Report Micro App

Build an application that can be run as a container on the cloud for sending out daily status emails for each project.  
The functionality of the application is:

1.  Every weekday at 10pm send out the daily status email based on a template so that all emails look identical.
2.  The email subject should be Daily Status Report of (Project Name) for (Date).
3.  The emails should be sent to all team members in that project and also to recipients updated for each project (Problem Statement 1).
