## Section 10

Change Domain Models and Add EF core Relationships

Add-Migration "Add Relationships"
Update-Database


## Section 15

Create Identity Tables Run EF Core Migrations

Add-Migration "Initial Migration For Auth" -Context "AuthDbContext"

Update-Database -Context "AuthDbContext"


