# Contributing to <PROJECT NAME> APIs

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to API development. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[How Can I Contribute?](#how-can-i-contribute) 

- [Pull Requests](#pull-requests)   
- [Pull Request Etiquette](#pull-request-etiquette)

[Styleguides](#styleguides)

- [Git Commit Messages](#git-commit-messages)   
- [REST Naming Guidelines](#rest-naming-guidelines)   
- [C# Styleguide](#csharp-styleguide)   
- [Database Styleguide](#database-styleguide)   


## How Can I Contribute?

### Pull Requests

Please follow these steps to have your contribution considered by the reviewers:

- Maintain Code quality
- Make sure all acceptance criterias in the JIRA Ticket, are met
- Make sure impact analysis is done prior to raising a PR
- PR raised should have a good clear summary title and clear description. 
- Follow the [styleguides](#styleguides), during development


The repository uses Feature Branch workflow as defined here in this [link](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)

The branch name corresponds to the JIRA ticket. For e.g.  

- For Story DL-15, the branch name should be **feature/DL-15**
- For Bug DL-15, the branch name should be **bugfix/DL-15**
- For Production Hotfix DL-15, the branch name should be **hotfix/DL-15**

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.


### Pull Request Etiquette

Please follow these rules:

- Should have a meaningful title, preceded by JIRA ID. 

    > For e.g. feature/DL-15 Biller can send an invoice via email to customer once it is generated

- Should have a useful description. A description should have 2 things - 
    1. Higlights of changes made. A special mention when a change is made to a common functions which impact other areas. Higlight those areas.

        > For e.g. A new endpoint added or any changes to the database. A mention of tenant specific query. 
        
    2. List of test cases executed. 
    3. The above 2 things should exist in JIRA comments for the Story executed as well. A copy/paste 

- Should comprise of small commits, each commit with a descriptive message. Just follow the Styleguide rule of Git Commit messages.

- Review Checklist: 
	1. Check for unused code
	2. Look for similar functions in repository or service, even API endpoints
		- Recall the already built features in app
		- Find for similar implementation
	3. Check logical correction - The implementation is doing what it suppose to do. Counter it with the test cases
	4. Check contradiction with existing features. There should be none. If found, higlight it in the JIRA ID tagging TL, BA, PM
	5. Clean Code Rules - 
		- Appropriate names
		- Descriptive names
		- Functions - 
			1. Small
			2. Precise to the purpose
			3. Single responsibility
			4. One Level of abstraction
			5. Separate Commands from Queries
		- Always declare constants for literals
	6. Database Migrations - 
		- As much as possible should have undo function
		- Create Isolated (Single responsibility) units
		- Differentiate when a data improvement is needed for one tenant, it can not be a migration. Should be a custom deployment task
	7. For better readability, key constructs of a class, file should have a proper order of - 
		- Related functions, 
		- Related types, 
		- Related properties
		- Related endpoints
	8. Naming - 
		- Boolean flags should be generally - Is, Has, Does (NOT TO USE - Did, Done, Had)


## Styleguides

### Git Commit Messages

Very important to add proper messages on each commit, so the team members and yourself can make out what is being done.
Try to match the message with a Subtask, if the commit is being done against a story.

Please follow these:

- Always start message with the Story Id, Bug Id from the JIRA   

    > For e.g. "[DL-15] [DL-17] Added a new endpoint to check email uniqueness during a resource creation"

- The message should be complete, and should use following format -   

    > [StoryID] [SubTaskID] [Fixed/Added/Changed/Removed] [Method/Class/Enum/Service/Mapper] for [Purpose]

    > For e.g. [DL-15] [DL-17] Fixed a logical error in CalculateFare inside BookingService.cs, which was causing Fare being calculated doubled.

- Avoid tagging multiple JIRA IDs in one commit. Ideally on Ticket ID for each commit.  


### REST Naming Guidelines

Please follow the instructions as provided in [https://restfulapi.net/resource-naming](https://restfulapi.net/resource-naming/)

Please use following HTTP Methods appropriatly -  

- GET (for getting one record or mutliple)    
- POST (for creating new record)   
- PUT (for updating the record)   
- PATCH (for partial updates, like status updates)   
- DELETE (for deleting a record, do not use for marking a record Inactive )   


### C# Styleguide

- Naming Conventions -
    - Each Class Name, Property Name, Function Name should be Pascal Case
    - Each private Field in a Class should be Camel Case and should have a "_" as prefix
    - Each Function variable and argument should be a Camel Case
    - Names of interfaces start with I, e.g. IInterface
    - Filenames and directory names are PascalCase
    - The file name should be the same as the name of the class/interface/enum/struct it contains

- Worker Classes (defining such type, use following as suffix while naming classes) - 
    - Controller: An API Controller serving an Endpoint, should always be named with Suffix "Controller"
    - Service: An orchestrator executing business logic, by fetching data from Repositories and applying transformation to create different types, using Factories
    - Factory: An implementation, which transforms data from one shape to another
    - Repository: An implementation, which makes call to get data from Database Tables using an ORM object or any other method.
    - Validator: An implementation, which generally is a one-to-one with a DTO, to perform validations on Posted Data

- ORM Entities/Domain -  
    - To be under namespace "Domain"  
    - Each Domain by convention should be named matching Table Name  
    - Each Property Name and Class Name to follow PascalCase  
    - Avoid using Data Annotations to setup ORM configurations, instead use Fluent Mappings  

- DTOs used to exchange data between client/server are called ViewModels -  
    - Under ViewModels, you can have a 
        - ViewModel (for display),  
        - EditModel (for POST/PUT),  
        - ListModel (for a collection model)  
    - Do not use Domain as ViewModel   
    - Do not extend ViewModel from a Domain

- Whitespace Rules - 
    - A maximum of one statement per line.
    - A maximum of one assignment per statement.
    - Indentation of 4 spaces, one tab.
    - Column limit: 100.
    - No line break before opening brace.
    - No line break between closing brace and else.
    - Braces used even when optional.
    - Space after if/for/while etc., and after commas.
    - No space after an opening parenthesis or before a closing parenthesis.
    - No space between a unary operator and its operand. One space between the operator and each operand of all other operators.

- Towards Better Code Writing
    - Always give descriptive names to the variables, functions, classes etc. Avoid using abbreviations
    - Always give descriptive names when using variables in iterations or LINQ queries as well. Avoid using one letter substitute
    - Always use implicit typing when RHS is a obvious assignment, otherwise define types explicitly
    - Better Expressions: Avoid using long (or nested) ternary expressions
    - Better Expressions: Avoid writing long object paths, substitute with a variable
    - Better Functions: Functions should not have a long list of arguments.
    - Better Functions: If a function name contains cojunctions like "and", "or", it can be a hint of violating Single Responsibility
    - Better Functions: Function Names should be precise and use standard/consistent verbs. 
    
        > For e.g. decide whether to use "get" or "fetch", "update" or "modify"


### Database Styleguide
- Setup a separate user to be used for the database connection, instead of using root user  

- Table Names should be singular and not plural. The name represents one record of the table.   

    > For e.g. Person and not people, Account not Accounts, Invoice not Invoices etc.

- For Association table, avoid using any suffix or prefix in the table name.   

    > For e.g. For payments against Invoices you can have InvoicePayment, address of a customer you can have CustomerAddress. Avoid using InvoicePaymentMap or InvoicePaymentAssociation etc.

- Both Table Name and Column Names should follow PascalCase, and no underscore or no hyphen(dash)   

- Foreign Key Column Names should follow proper convention, i.e. Id in suffix to TableName.   

    > For e.g. Column for Invoice reference in Payment table to be named InvoiceId, Address in Customer should be AddressId etc. 

    There can be exceptions to this, if two columns in the table reference the same second table, then you can tie the purpose For e.g. CreatedById, UpdatedById etc.