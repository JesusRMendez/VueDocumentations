#  Programming Coding Standards

**Guide**





 Draft July 2019

Intellectual Property of DevTeam







            www.cdevteam.com

# Table of Contents

Introduction        4

Goals        4

Scope        4

Fixing Problems in the Guide        4

Fixing Problems in Code        5

When Does this Guide Apply        5

Code changes made to existing systems not written to this standard        5

Code written for customers that require that their standards should be adopted        5

Naming Guidelines        5

Overview        6

General Rules        6

Capitalization Styles        6

Pascal Case        6

Camel Case        7

Upper Case        7

Case Sensitivity (not applicable to VB)        8

Abbreviations        9

Namespaces        10

Usage        10

Naming        10

Standard Prefixes        10

Grouping and ordering        11

Formatting        12

Indent and spacing        12

Braces        12

Properties        13

Enumerations        13

Return Statements        13

Switch Statements        13

Parentheses        14

Empty Lines        14

Line Breaking        15

Table of Standard Control Prefixes        17

Code Commenting        18

Language Usage        22

Declaration Order        22

Visibility        22

Constants        22

Readonly vs Const        22

String and Resources        23

Properties        23

Methods / Functions        24

Parameters        24

Classes        25

Interfaces        25

Structs        25

Enumerations        26

Local variables        27

Event Handlers        27

Operators        27

If Statements        27

Using &quot;var&quot;        28

Flow Control        30

Exceptions        31

User Controls        32

Generics        33

Classes        33

Methods        34

.ASPNET Best Practices and Tips        35

Use Paging Eficiently        35

Generate New Encryption Keys        35

Encrypt Sensitive Sections of your Web.Config        35

Set Retail=&quot;True&quot; in your Machine.Config        35

Create a new Application Pool for your Site        36

Set the memory limit for your Application Pool        36

Develop a repeatable Deployment Process and Automate It        36

Build and Reference Release Versions of All Assemblies        36

Load Test        36

Turn off Tracing unless until required        36

Turn off Session State, if not required        37

Disable View State of a Page if Possible        37

Use the String Builder to concatenate string        38

Do NOT use Ajax TabContainer Control        38

Loading Page for all web applications        38

Team Explorer Best Practices        38

Check-In        39

Review all the pending changes associated with your workspace.        39

Check-Out        39

Shelving and Unshelving        39

Database Best Practices        41

Table Prefix        41

Table Name        41

Field Name        41

Fields Required and Order        41

Acronyms        42

List of Acronyms        42

References        46

Attachment I – Internal Practices        47

Code Separation by Concern        47

Date Entry Controls        47

Database Transaction Management        47

Model Binding        47

LINQ Query Execution Read Uncommitted        47

#  Introduction

## Goals

The intent of this document is not to codify current practice at DevTeam as it stands at the time of writing. Instead, this guide has the following aims:

- To maximize readability and maintainability by prescribing a unified style.
- To maximize efficiency with logical, easy-to-understand and justifiable rules that balance code safety with ease-of-use.
- To maximize the usefulness of code-completion tools and accommodate IDE- or framework generated code.
- To prevent errors and bugs (especially hard-to-find ones) by minimizing complexity and applying proven design principles.
- To improve performance and reliability with a list of best practices.

Wherever possible, however, the guidelines include a specific justification for each design choice.

Unjustified guidelines must be either _justified_ or _removed_.

## Scope

This handbook mixes recommendations for programming with C#, .NET, MVC, AngularJS and the AFCG libraries. It includes rules for document layout (like whitespace and element placement) as well as design guidelines for elements and best practices for their use. It also assumes that you are using Microsoft Visual Studio 2017 or newer.

This guide is a work-in-progress and covers only those issues that DevTeam has encountered and codifies only that which DevTeam has put into practice and with which DevTeam has experience.

Therefore, some elements of style and design as well as some implicit best practices are probably not yet documented. _Speak up_ if you think there is something missing.

## Fixing Problems in the Guide

Unless otherwise noted, these guidelines **are not**** optional **, nor are they up to** interpretation**.

- If a guideline is not sufficiently clear, recommend a clearer formulation.
- If you don&#39;t like a guideline, try to get it changed or removed, but **don&#39;t just ignore** it.

## Fixing Problems in Code

If code is non-conforming, it should be fixed at the earliest opportunity.

- If the error is small and localized, you should fix it with the next check-in (noting during the code review that the change was purely stylistic and unrelated to other bug fixes).
- If the error is larger and/or involves renaming or moving files, you should check the change in separately in order to avoid confusion.
- If the problem takes too long to repair quickly, you should create an issue in the Team Foundation Server to address the problem at a later time.

#  When Does this Guide Apply

It is the intention that all code written for or by DevTeam adheres to this standard. However, there are some cases where it is impractical or impossible to apply these conventions.

This document applies to all code except the following:

## Code changes made to existing systems not written to this standard

In general, it is a good idea to make your changes conform to the surrounding code style wherever possible. You should choose to adopt this standard for major additions to existing systems or when you are adding code that you think will become part of the DevTeam code library.

## Code written for customers that require that their standards should be adopted

DevTeam may, from time to time work with customers that have their own coding standards. Most coding standards applicable to a Microsoft development language derive at least some of their content from a Microsoft white paper that documented a set of suggested naming standards. For this reason, many coding standards are broadly compatible with each other. This document goes a little further than most in some areas; however, it is likely that these extensions will not conflict with most other coding standards. We must be absolutely clear on this point: if there is a conflict, the customer&#39;s coding standards are to apply - always.

# Naming Guidelines

Of all the components that make up a coding standard, naming standards are the most visible and arguably the most important.

Having a consistent standard for naming the various objects in your program will save you an enormous amount of time both during the development process itself and also during any later maintenance work.

## Overview

For those of you coding in VB.NET, first things first, always use Option Explicit. The reasons are so obvious that I won&#39;t discuss it any further.

Remove the Visual Basic reference from your project. Making use of the original Visual Basic functions has been proven to be up to 1000 times slower than the .NET counterparts; you have been warned.

## General Rules

- Names are in US-English (e.g. use &quot;color&quot; instead of &quot;colour&quot;).
- Names conform to English grammatical conventions (e.g. use ImportableDatabase instead of DatabaseImportable).
- Names should be as short as possible without losing meaning.
- Prefer whole words or stick to predefined short forms or abbreviations of words.
- Make sure to capitalize compound words correctly; if the word is not hyphenated, then it does not need a capital letter in the camel- or Pascal-cased form. For example, &quot;metadata&quot; is written as Metadata in Pascal-case, not MetaData.
- Acronyms should be Pascal-case as well (e.g. &quot;Xml&quot; or &quot;Sql&quot;) unless they are only two letters long. Acronyms at the beginning of a camel-case identifier are always all lowercase (more info see Abbreviations).
- Identifiers differing only by case may be defined within the same scope only if they identify different language elements (e.g. a local variable and a property).

public void UpdateLength(int newLength, bool refreshViews)

{

int length = Length;

// ...

}

- You may not use identifiers that are keywords in C#; neither may you use the @-symbol to turn a keyword into a valid identifier.

## Capitalization Styles

Use the following three conventions for capitalizing identifiers.

### Pascal Case

The first letter in the identifier and the first letter of each subsequent concatenated word are capitalized. You can use Pascal case for identifiers of three or more characters. For example:

**B** ack **C** olor

### Camel Case

The first letter of an identifier is lowercase and the first letter of each subsequent concatenated word is capitalized. For example:

**b** ack **C** olor

### Upper Case

All letters in the identifier are capitalized. Use this convention only for identifiers that consist of two or fewer letters. For example:

System.IO

System.Web.IO

You might also have to capitalize identifiers to maintain compatibility with existing, unmanaged symbol schemes, where all uppercase characters are often used for enumerations and constant values. In general, these symbols should not be visible outside of the assembly that uses them.

The following table summarizes the capitalization rules and provides examples for the different types of identifiers:



| **Identifier** | **Case** | **Example** |
| --- | --- | --- |
| Class | Pascal | AppDomain |
| Enum type | Pascal | ErrorLevel |
| Enum values | Pascal | FatalError |
| Event | Pascal | ValueChange |
| Exception class | Pascal | WebException Note: Always ends with the suffix Exception. |
| Read-only Static field | Pascal | RedValue |
| Interface | Pascal | IDisposable Note: Interfaces always begin with the prefix I. |
| Method | Pascal | ToString |
| Namespace | Pascal | System.Drawing |
| Parameter | Camel | typeName |
| Property | Pascal | BackColor |
| Private instance field | &quot;\_&quot; + Camel | \_redValueThe underscore breaks ambiguity between a private instance field and its public access property in internal class code. |
| Protected instance field | Camel | redValue Note: Rarely used. A property is preferable to using a protected instance field. |
| Public instance field | Pascal | RedValue Note: Rarely used. A property is preferable to using a public instance field. |
| Css Class | Camel | redBorderColorNote: May not apply when overwriting third-party css styles |

## Case Sensitivity (not applicable to VB)

To avoid confusion and guarantee cross-language interoperation, follow these rules regarding the use of case sensitivity:

1. Do not use names that require case sensitivity. Components must be fully usable from both case-sensitive and case-insensitive languages. Case-insensitive languages cannot distinguish between two names within the same context that differ only by case. Therefore, you must avoid this situation in the components or classes that you create.
2. Do not create two namespaces with names that differ only by case. For example, a case insensitive language cannot distinguish between the following two namespace declarations.

namespace MyLibrary{}

namespace Mylibrary{}

1. Do not create a function with parameter names that differ only by case. The following example is incorrect.

void MyFunction(string a, string A);

1. Do not create a namespace with type names that differ only by case. In the following example, Point p and POINT p are inappropriate type names because they differ only by case.

System.Windows.Forms.Point p;

System.Windows.Forms.POINT p;

1. Do not create a type with property names that differ only by case. In the following example, int Color and int COLOR are inappropriate property names because they differ only by case.

int Color {get; set;}

int COLOR {get; set;}

1. Do not create a type with method names that differ only by case. In the following example, calculate and Calculate are inappropriate method names because they differ only by case

void calculate();

void Calculate();

## Abbreviations

To avoid confusion and guarantee cross-language interoperation, follow these rules regarding the use of abbreviations:

1. Do not use abbreviations or contractions as parts of identifier names. For example, use GetWindow instead of GetWin.
2. Where appropriate, use well-known acronyms to replace lengthy phrase names. For example, use UI for User Interface and OLAP for On-Line Analytical Processing.
3. Do not use acronyms that are not generally accepted in the computing field. (For example, XML, TTL, DNS, UI, IP and IO are all OK.)
4. When using acronyms, use Pascal case or camel case for acronyms more than two characters long. For example, use htmlButton or HTMLButton. However, you should capitalize acronyms that consist of only two characters, such as System.IO instead of System.Io.
5. Do not use abbreviations in identifiers or parameter names. If you must use abbreviations, use Camel Case for abbreviations that consist of more than two characters, even if this contradicts the standard abbreviation of the word.

## Namespaces

### Usage

- **Do not** use the global namespace; the only **exception** is for ASP.NET pages that are generated into the global namespace.
- Avoid fully-qualified type names; use the using statement instead.
- If the IDE inserts a fully-qualified type name in your code, you should fix it. If the unadorned name conflicts with other already-included namespaces, make an alias for the class with a using clause.
- **Avoid** putting a using statement inside a namespace (unless you must do so to resolve a conflict).
- **Avoid** deep namespace-hierarchies (five or more levels) as that makes it difficult to browse and understand.
- **Do not** reference unnecessary libraries, include unnecessary header files, or reference unnecessary assemblies. Paying attention to small things like this can improve build times, minimize chances for mistakes, and give readers a good impression

### Naming

- **Never** declare more than 1 namespace per file.
- **Avoid** making too many namespaces; instead, use catch-all namespace suffixes, like &quot;Utilities&quot;, &quot;Core&quot; or &quot;General&quot; until it is clearer whether a class or group of classes warrant their own namespace. Refactoring is your friend here.
- **Do not** include the version number in a namespace name.
- Use long-lived identifiers in a namespace name.
- Namespaces should be plural, as they will contain multiple types (e.g. DevTeam.Expressions instead of DevTeam.Expression).
- If your framework or application encompasses more than one tier, use the same namespace identifiers for similar tasks. For example, common data-access code goes in DevTeam.Data.
- **Avoid** using &quot;reserved&quot; namespace names like System because these will conflict with standard .NET namespaces and require resolution using the
global::namespace prefix.

### Standard Prefixes

- Namespaces at DevTeam start with DevTeam
- Namespaces for DevTeam products start with DevTeam.\&lt;ProductName\&gt;

Example: DevTeam.Enteract

- Namespaces for customer products start with \&lt;CustomerName\&gt;.\&lt;ProductName\&gt;

Acronyms should be used for customer names that are too long, in most cases the customer already have the acronym for them. Example:

Customer Department of Education (DE)

DevTeam.DE.PIE

### Grouping and ordering

        The namespaces at the top of the file should be in the following order:

| System.\* | .NET framework libraries |
| --- | --- |
| Third party | Non-DevTeam third party libraries |
| DevTeam.\* | Organize in order of dependency |

# Formatting

The formatting rules were designed for use with C#. Where possible, they should be applied to other languages (CSS, JavaScript, etc.) as well.

## Indent and spacing

-
An indent is four (4) spaces; it is never a tab.
 ![](data:image/*;base64,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)
- Use a single space after a comma (e.g. between function arguments).
- There is no space after the leading parenthesis/bracket or before the closing parenthesis/bracket.
- There is no space between a method name and the leading parenthesis, but there is a space before the leading parenthesis of a flow control statement.
- Use a single space to surround all 2 infix operators (e.g. firstValue ?? secondvalue : thirdValue); there is no space between a prefix operator (e.g. &quot;-&quot; or &quot;!&quot;) and its argument.
- Do not use spacing to align type members on the same column (e.g. as with the members of an enumerated type).

## Braces

- Curly braces should—with a few exceptions outlined below—go on their own line.
- A line with only a closing brace should never be preceded by an empty line.
- A line with only an opening brace should never be followed by an empty line.

## Properties

Complex getters and setters should have each bracket on its own line. The only exception to this rule is for getters and setters consisting of only a single expression.
publicstring ObjectId

        {

            get { return (string)ViewState[&quot;ObjectId&quot;]; }

            set { ViewState[&quot;ObjectId&quot;] = value; }

 }

## Enumerations

- Use the trailing comma for the last member of an enumeration; this makes it easier to move them around, if needed.

## Return Statements

- If a return statement is not the only statement in a method, it should be separated from other code by a single newline (or a line with only a bracket on it).
if (a == 1)
{
  return true;
}

returnfalse;
- **Do not** use else with return statements (use the style shown above instead):

if (a == 1)

{

  return true;

}

else// Not necessary

{

  return false;

}

## Switch Statements

- Contents under switch statements should be indented.
- Braces for a case-label are not indented; this maintains a nice alignment with the brackets from the switch-statement.
- Use braces for longer code blocks under case-labels; leave a blank line above the break statement to improve clarity.

switch (flavor)

{

  case Flavor.Up:

  case Flavor.Down:

  {

    if (someConditionHolds)

    {

      // Do some work

    }

    // Do some more work

    break;

  }

  default:

    break;

}

## Parentheses

- C# has a different operator precedence than Pascal or C, so you can write context != null &amp;&amp; context.Count \&gt; 0 without confusing the compiler. However, you should use the form (context != null) &amp;&amp; (context.Count \&gt; 0) for legibility&#39;s sake.
- **Do not** use parentheses around the parameter(s) in a lambda expression accepting a single parameter.
- To make it more readable, use parentheses around the condition of a ternary expression if it uses an infix operator.

return (Value != null) ? Value.ToString() : &quot;NULL&quot;;

- Prefix operators (e.g. &quot;!&quot;) and method calls should not have parentheses around them.

return !HasValue ? Value.ToString() : &quot;EMPTY&quot;;

## Empty Lines

In the following list, the phrase &quot;surrounding code&quot; refers to a line consisting of more than just an opening or closing brace. That is, no new line is required when an element is at the beginning or end of a methods or other block-level element.

Always place an empty line in the following places:

- Between the file header and the namespace declaration or the first using statement.
- Between the last using statement and the namespace declaration.
- Between types (classes, structs, interfaces, delegates or enums).
- Between public, protected and internal members.
- Between a call to a base method and ensuing code.
- Between return statements and surrounding code (this does not apply to return statements at the beginning or end of methods).
- Between block constructs (e.g. while loops or switch statements) and surrounding code.
- Between documented enum values; undocumented may be grouped together.
- Between logical groups of code in a method; this notion is subjective and more a matter of style. You should use empty lines to improve readability, but should not overuse them.
- Between the last line of code in a block and a comment for the next block of code.
- Between statements that are broken up into multiple lines.
- Between a #region tag and the first line of code in that region.
- Between the last line of code in a region and the #endregion tag.

**Do not** place an empty line in the following places:

- After another empty line; the AFCG style uses only single empty lines.
- Between retrieval code and handling for that code. Instead, they should be formatted together.

IMetaReadableObject obj = context.Find\&lt;IMetaReadableObject\&gt;();

if (obj == null)

{

context.Recorder.Log(Level.Fatal, String.Format(&quot;Error!&quot;));

return null;

}

- Between any line and a line that has only an opening or closing brace on it (i.e. there should be no leading or trailing newlines in a block).
- Between undocumented fields (usually private); if there are many such fields, you may use empty lines to group them by purpose.

## Line Breaking

- **Do not** put more than one statement on a single line because it makes stepping through the code in a debugger much more difficult.

         Good:

// C++ / C# sample:

a = 1;

b = 2;

&#39; VB.NET sample:

If (IsAdministrator()) Then

    Console.WriteLine(&quot;YES&quot;)

EndIf

Bad:

// C++ / C# sample:

a = 1; b = 2;

&#39; VB.NET sample:

If (IsAdministrator()) Then Console.WriteLine(&quot;YES&quot;)

- No line should exceed 100 characters; use the line-breaking rules listed below to break up a line.
- Use line-breaking only when necessary; do not adopt it as standard practice.
- If one or more line-breaks is required, use as few as possible.
- Line-breaking should occur at natural boundaries; the most common such boundary is between parameters in a method call or definition.
- Lines after such a line-break at such a boundary should be indented.
- The separator (e.g. a comma) between elements formatted onto multiple lines goes on the same line after the element; the IDE is much more helpful when formatting that way.
- The most natural line-breaking boundary is often before and after a list of elements. For example, the following method call has line-breaks at the beginning and end of the parameter list.

people.DataSource = CurrentCompany.Employees.GetList(

connection, metaClass, GetFilter(), null

);

- If one of the parameters is much longer, then you add line-breaking between the parameters; in that case, all parameters are formatted onto their own lines:

people.DataSource = CurrentCompany.Employees.GetList(

connection,

metaClass,

GetFilter(&quot;Global.Applications.Updater.PersonList.Search&quot;),

null

);

- Note in the examples above that the parameters are indented. If the assignment or method call was longer, they would no longer fit on the same line. In that case, you should use two levels of indenting.

Application.Model.people.DataSource =

          Global.ApplicationEnvironment.CurrentCompany.Employees.GetList(

connection,

metaClass,

GetFilter(&quot;Global.Applications.Updater.PersonList.Search&quot;),

null

  );

- Avoid nesting more than two ternary operators in a single line. Break it down into a series of if/else statements.

// Bad!

bool result = condition1 ? true : contition2 ? true : condition3 ? true : false;

// Good!

if(condition1)

       {

           result = true;

       }

       elseif(condition2)

       {

           result = true;

       }

       elseif(condition3)

       {

           result = true;

       }

       else

       {

           result = false;

}

## Table of Standard Control Prefixes

The following table is a list of the common types of controls you will encounter together with their prefixes:

| **Prefix** | **Control** |
| --- | --- |
| btn | Button |
| cb | CheckBox |
| cbl | CheckBoxList |
| ddl | DropDownList |
| fu | FileUpload |
| hf | HiddenField |
| hl | HyperLink |
| img | Image |
| ibtn | ImageButton |
| lbl | Label |
| lbtn | LinkButton |
| lb | ListBox |
| lit | Literal |
| mvw | MultiView |
| pnl | Panel |
| ph | PlaceHolder |
| rb | RadioButton |
| rbl | RadioButtonList |
| txt | TextBox |
| vw | View |
| wzd | Wizard |
| lvw | ListView |
| gvw | GridView |
| fvw | FormView |
| rpt | Repeater |
| ods | ObjectDataSource |
| valreq | RequiredFieldValidator |
| valrng | RangeValidator |
| valcom | CompareValidator |
| valrex | RegularExpressionValidator |
| valcus | CustomValidator |
| valsum | ValidationSummary |
| sm | ScriptManager |
| udp | UpdatePanel |
| up | UpdateProgress |

## Code Commenting

- All comments should be written in the same language, be grammatically correct, and contain appropriate punctuation.
-  Use // or /// but never /\* … \*/
-   **Do not**&quot;flowerbox&quot; comment blocks.

// \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

// Comment block

// \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

- Use inline-comments to explain assumptions, known issues, and algorithm insights.
- In-line comments are the Post-It notes of programming. This is where you make annotations to help yourself or another programmer who needs to work with the code later. Use In-line comments to make notes in your code about:
  - _What you are doing._
  - _Where you are up to._
  - _Why you have chosen a particular option._
  - _Any external factors that need to be known._
- Here are some examples of appropriate uses of In-line comments:
- What we are doing:

// Now update the control totals file to keep everything in sync

- Where we are up to:

// At this point, everything has been validated.

// If anything was invalid, we would have exited the procedure.

- Why we chose a particular option:

// Use a sequential search for now because it&#39;s simple to code

// We can replace with a binary search later if it&#39;s not fast

// enough

// We are using a file-based approach rather than doing it all

// in memory because testing showed that the latter approach

// used too many resources under Win2000. That&#39;s why the code

// is here rather than in XXX.VB where it belongs.

- External factors that need to be kept in mind:

// This assumes that the INI file settings have been checked by

// the calling routine

- **Do not** use inline-comments to explain obvious code. Well written code is self-documenting.
- Notice that we are **not** documenting what is self-evident from the code. Here are some examples of **inappropriate** In-line comments:

// Declare local variables

int currentEmployee;

// Increment the array index

currentEmployee += 1;

// Call the update routine

UpdateRecord();

- Include comments using Task-List keyword flags to allow comment-filtering.

// TODO: Place Database Code Here

// TODO: Removed P\Invoke Call due to errors

- Always apply C# comment-blocks (///) to public, protected, and internal
- Only use C# comment-blocks for documenting the API.
- Always include \&lt;summary\&gt; Include \&lt;param\&gt;, \&lt;return\&gt;, and  \&lt;exception\&gt;comment sections where applicable.
- Include \&lt;see cref=&quot;&quot;/\&gt;and \&lt;seeAlso cref=&quot;&quot;/\&gt;where possible.
- Always add **CDATA** tags to comments containing code and other embedded markup in order to avoid encoding issues.
- **Example:**

/// \&lt;example\&gt;

/// Add the following key to the &quot;appSettings&quot; section of your config:

/// \&lt;code\&gt;\&lt;![CDATA[

///         \&lt;configuration\&gt;

///                 \&lt;appSettings\&gt;

///                         \&lt;add key=&quot;mySetting&quot; value=&quot;myValue&quot;/\&gt;

///                 \&lt;/appSettings\&gt;

///         \&lt;/configuration\&gt;

/// ]]\&gt;\&lt;/code\&gt;

/// \&lt;/example\&gt;

- Comments example of a class:
 /// \&lt;summary\&gt;

    /// Applications workflow item object class.

    /// \&lt;/summary\&gt;

    /// \&lt;author\&gt;

    /// A.G. Rosario

    /// \&lt;/author\&gt;

    /// \&lt;remarks\&gt;

    /// Provide the functionality to manage the workflow process of an a item record from the database.

    /// \&lt;/remarks\&gt;
public class WorkflowItem

    {

                …

    }

- **Do not**** leave commented code.** Every code is in a repository so it can be consulted anytime in the future.

# Language Usage

## Declaration Order

- Group internal class implementation by type in the following order:

-
  1. Nested Enums, Structs, and Classes
  2. Member variables
  3. Properties
  4. Constructors &amp; Finalizers
  5. Methods

- Sequence declarations within type groups based upon access modifier and visibility:

-
  1. Public
  2. Protected
  3. Internal
  4. Private

- Segregate interface Implementation by using **#region** statements

## Visibility

- The visibility modifier is required for all types, methods and fields; this makes the intention explicit and consistent.
- The visibility keyword is always the first modifier.
- The **const** or **readonly** keyword, if present, comes immediately after the visibility modifier.
- The **static** keyword, if present, comes after the visibility modifier and **readonly** modifier.

**private readonly static string**** DefaultDatabaseName** = &quot;admin&quot;;

## Constants

- Declare all constants other than **0** , **1** , **true** , **false** and **null**.
- Use **true** and **false** only for assignment, never for comparison.
- Avoid passing **true** or **false** for parameters; use an **enum** or constants to impart meaning instead.
- If there is a logical connection between two constants, indicate this by making the initialization of one dependent on the other.

**public const int** DefaultCacheSize = 25;

**public const int** DefaultGranularity = DefaultCacheSize / 5;

## Readonly vs Const

- The difference between **const** and **readonly** is that **const** is compiled and **readonly** is initialized at runtime.
- Use **const** only when the value really is constant (e.g. **NumberDaysInWeek** ); otherwise, use **readonly**.
- Though **readonly** for references only prevents writing of the reference, not the attached value, it is still a helpful hint for both the compiler and the reader.

## String and Resources

- **Do not** hardcode strings that will be presented to the user; use resources instead. For products in development, this text extraction can be performed after the code has crystallized somewhat.
- Resource identifiers should be alphanumeric, but may also include a dot (&quot;.&quot;) to logically nest resources. It should contain the name of the control sample &quot;lblName&quot;, &quot;lblLastName&quot;, etc.
- **Do not** use constants for strings; use resource tables instead (this aids translation, if necessary).
- Configuration data should be moved into application settings as soon as possible.

## Properties

- Prefer automatic properties as it saves a lot of typing and vastly improves readability.

**public**** bool **ShowTab{** get **;** set**;}

- If there a exceptional need to manage the internal value of public property then you can create private properties.
- Use read-only properties if there is no logical reason for calling code to be able to change the value.
- Properties should be commutative; that is, it should not matter in which order you set them.
- Avoid enforcing an ordering by using a method to execute code that you would want to execute from the property setter. The following example is incorrect because setting the password before setting the name causes a login failure.

**class** SecuritySystem

{

**public string** UserName {   **get**** ; **** set ****;** }

**public int** Password

{

**get** ;

**set**

{

LogIn();

}

}

**protected**** void**LogIn()

{

IPrincipal principal =

Authenticate(UserName, Password);

}

**private** IPrincipal Authenticate( **string** UserName,

**int** Password)

{

// Authenticate the user

}

}

- Instead, you should take the call LogIn() out of the setter for Password and make the method public, so the class can be used like this instead:

SecuritySystem system = new SecuritySystem();

system.Password = &quot;knockknock&quot;;

system.UserName = &quot;Encodo&quot;;

system.LogIn();

- In this case, Password can be set before the UserName without causing any problems.

## Methods / Functions

- Methods should not have more than 200 lines of code.
- Avoid returning null for methods that return collections or strings. Instead, return an empty collection (declare a static empty list) or an empty string (Empty).
- Overloads:
  - Overloads are encouraged for methods that are in the same family and either serve the same purpose or have similar behavior. Do not use the types of parameters to distinguish these functions from one another. For example, the following is incorrect

**void** Update();

**void** UpdateUsingQuery(IQuery query);

**void** UpdateUsingSql( **string** sql);

-
  - Instead, use an overload, letting the method signature describe the different functions. This reduces the perceived size of the API and makes it easier to understand.

**void** Update();

**void** Update(IQuery query);

**void** Update( **string** sql);

## Parameters

- Methods should not have more than 10 parameters (consider using a **struct** instead).
- Methods should not have more than 2 out or ref parameters (consider using a **struct** instead).
- **ref** and **out** parameters should come last in the list of parameters.
- The implementation of an interface method should use the same parameter name as that given in the interface method declaration.

- **Do not** declare reserved parameters (use overloads in future library versions instead).

## Classes

- Never declare more than one field per line; each field should be an individually documentable entity.
- **Do not** use **public** or **protected** fields; use private fields exposed through properties instead.
- **Do not** create too many static classes; instead, determine whether new functionality can be added to an existing static class.

## Interfaces

- Use interfaces to &quot;fake&quot; multiple-inheritance.
- Define interfaces if there will be more than one implementation of a hierarchy; without multiple-inheritance, this is the only way to remain flexible as to the implementation.
- Define interfaces to clearly define what comprises an API; an interface will generally be smaller and more tightly-defined that the class that implements it. A class-based hierarchy runs the risk of mixing interface methods with implementation methods.
- Consider using a C# attribute instead of a marker interface (an interface with no members). This makes for a cleaner inheritance representation and indicates the use of the marker better (e.g. NUnit tests as well as the serializing subsystem for .NET use attributes instead of marker interfaces).
- Re-use interfaces as much as possible to avoid having many very similar interfaces that cause confusion as to which one should be used where.
- Keep interfaces relatively small in order to ease implementation (5-10 members).
- Where possible, provide an abstract class or default descendent that application code can use for implementing an interface. This provides both an implementation example and some protection from future changes to the interface.
- Use interfaces where the functionality isn&#39;t the direct purpose of the object or to expose a part of the class&#39;s functionality (as with aspect-oriented programming).
- Use explicit interface implementation where appropriate to avoid expanding a class API unnecessarily.
- Each interface should be used at least once in non-testing code; otherwise, get rid of it.
- Always provide at least one, tested implementation of an interface.

## Structs

Consider defining a structure instead of a class if most of the following conditions apply:

- Instances of the type are small (16 bytes or less) and commonly short-lived.
- The type is commonly embedded in other types.
- The type logically represents a single value and is similar to a primitive type, like an **int** or a **double**.
- The type is immutable.
- The type will not be boxed frequently.

Use the following rules when defining a **struct** :

- Avoid methods; at most, have only one or two methods other than overrides and operator overloads.
- Provide parameterized constructors for initialization.
- In scenarios that require a significant amount of boxing and un-boxing, value types perform poorly as compared to reference types.
- Overload operators and equality as expected; implement IEquatable instead of overriding **Equals** in order to avoid the negative performance impact of boxing and un-boxing the value.
- A **struct** should be valid when uninitialized so that consumers can declare an instance without calling a constructor.
- Public fields are allowed (even encouraged) for structures used to communicate with external APIs through unmanaged code.

## Enumerations

- Always use enumerations for strongly-typed sets of values
- Use enumerations instead of lists of static constants _unless_ that list can be extended by descendent code; if the list is not logically open-ended, use an **enum**.
- Enumerations are like interfaces; be extremely careful of changing them when they are already included in code that is not under your control (e.g. used by a framework that is, in turn, used by external application code). If the enumeration must be changed, use the **ObsoleteAttribute** to mark members that are no longer in use.
- **Do not** assign a type to an **enum** unless absolutely necessary; use the default type of **Int32** whenever possible.
- **Do not** include sentinel values, such as **FirstValue** or **LastValue**.
- **Do not** assign explicit values to simple enumerations except to enforce specific values for storage in a database.
- The first value in an enumeration is the default; make sure that the most appropriate simple enumeration value is listed first.

## Local variables

- Declare a local variable as close as possible to its first use (and within the most appropriate scope).
- If a local variable is initialized, put the initialization on the same line as the declaration. If the line gets too long, use multiple lines as described before in this guide.

## Event Handlers

You should use the pattern and support classes for event-handling provided by the .NET library.

- Do not expose delegates as public members; instead declare events using the event keyword.
- **Do not** add a method to a delegate with new **EventHandler(…)**; instead, use delegate inference.
- **Do not** define custom delegates for event handling; instead use **EventHandler\&lt;T\&gt;**.
- Put all extra event data into an **EventArgs** descendent; subsequent versions can alter this descendent without changing the signature.
- Use **CancelEventArgs** as the base class if you need to be able to cancel an event.
- Neither the sender parameter nor the **args** parameter may be null; this avoids forcing event handlers to check for null.
- **EventsArgs** descendents should declare only properties, not methods or other application logic.

## Operators

- Be extremely careful when overloading operators; in general, you should only do so for **structs**. If you feel that an operator overload is especially clever, it probably isn&#39;t; check with another developer before coding it.
- Avoid overriding the **==** operator for reference types; override the **Equals()** method instead to avoid redefining reference equality.
- If you do override **Equals()**, you should also override **GetHashCode()**.
- If you do override the **==** operator, consider overriding the other comparison operators **(!=, \&lt;, \&lt;=, \&gt;, \&gt;=)** as well.
- You should return false from the **Equals()** function if the objects cannot be compared.
- However, if they are different types, you may throw an exception.

## If Statements

- **Do not** compare to **true** or **false** ; instead, compare pure Boolean expressions.
- Initialize Boolean values with simple expressions rather than using an if-statement; always use parentheses to delineate the assigned expression.

**bool** needsUpdate = (Count \&gt; 0 &amp;&amp; Objects[0].Modified);

- Always use brackets for flow-control blocks (switch, if, while, for, etc.)
- **Do not** add useless else blocks. An &quot;if&quot; statement may stand alone and an &quot;else if&quot; statement may be the last condition.

**if** (a == b)

{

// Do something

}

**else if** (a \&gt; b)

{

// Do something else

}

// No final &quot;else&quot; required

- Do not force really complicated logic into an &quot;if&quot; statement; instead, use local variables to make the intent clearer. For example, imagine we have a lesson planner and want to find all unsaved lessons that are either unscheduled or are scheduled within a given time-frame. The following condition is too long and complicated to interpret quickly:

**if** (!lesson.Stored &amp;&amp; (((StartTime \&lt;= lesson.StartTime) &amp;&amp; (lesson.EndTime \&lt;= EndTime)) || ! lesson.Scheduled))

{

// Do something with the lesson

}

Even trying to apply the line-breaking rules results in an unreadable mess:

**if** (!lesson.Stored &amp;&amp; (((StartTime \&lt;= lesson.StartTime) &amp;&amp; (lesson.EndTime \&lt;= EndTime)) || ! lesson.Scheduled))

{

// Do something with the lesson

}

Even with this valiant effort, the intent of the ||-operator is difficult to discern. With local variables, however, the logic is much clearer:

**bool** lessonInTimeSpan = ((StartTime \&lt;= lesson.StartTime) &amp;&amp; (lesson.EndTime \&lt;= EndTime));

if (!lesson.Stored &amp;&amp; (lessonInTimeSpan || ! lesson.Scheduled))

{

// Do something with the lesson

}

## Using &quot;var&quot;

The use of var is permitted ONLY when the explicit-type is **not known** or **unavailable**. The use of var can be used **only** when you need  to:

- Use the type of ObjectQuery
- Use code that changes the type at runtime instead of compiletime. Is **VERY IMPORTANT** to comment the code with the specifications of this code.

The use of var is **only allowed** when:

- The explicit-type is **not known** (anonymous).

**Example:**

var car = new { Year = 2020, Model = &quot;Mustang GT&quot;, Manufacturer = &quot;Ford&quot; };

- Working with **LINQ queries.**

**Example:**

var query = from c in DataContext

             where c.Id = 123

             select new Car

{ Year = c.Year, Model = c.Model, Manufacturer = c.Model };

- Initializing the variable directly with an **object constructor call**.

**Example:**

var car = new Car();

- Readability needs to be improved.

// Bad

List\&lt;ThisIsMyLongCustomCarTypeObject\&gt;data =

        CarTypeObjectEngine.GetAvailableModelByManufacturerId(1);

// Good

var data = CarTypeObjectEngine.GetAvailableModelByManufacturerId(1);

**Note:** _If the developer wants to know the type inside the &quot;var&quot; just move the cursor to the variable name._

The use of var is **NOT allowed** when:

- Initializing **value types** or **string**.

**Example:**

var index = 0;

var name = &quot;John Doe&quot;;







## Flow Control

- Avoid invoking methods within a conditional expression.
- Avoid creating recursive methods. Use loops or nested loops instead.
- Avoid using foreachto iterate over immutable value-type collections. E.g. String arrays.
- Do not modify enumerated items within a foreach
- Use the **ternary** conditional operator only for trivial conditions. Avoid complex or compound ternary operations.

**Example:**

int result = isValid ? 9 : 4;

- Avoid evaluating Boolean conditions against truer false.
**Example:**

// Bad!

if (isValid == true)

{…}

// Good!

if (isValid)

{…}

- Avoid assignment within conditional statements.
**Example:**

if((i=2)==2) {…}

- Avoid compound conditional expressions – use Boolean variables to split parts into multiple manageable expressions.

**Example:**

// Bad!

if (((value \&gt; \_highScore) &amp;&amp; (value != \_highScore)) &amp;&amp; (value \&lt; \_maxScore))

{…}

// Good!

isHighScore = (value \&gt;= \_highScore);

isTiedHigh = (value == \_highScore);

isValid = (value \&lt; \_maxValue);

if ((isHighScore &amp;&amp; ! isTiedHigh) &amp;&amp; isValid)

{…}

- Avoid explicit Boolean tests in conditionals.

**Example:**

// Bad!

if(IsValid == true)

{…};

// Good!

if(IsValid)

{…}

- Only use switch/casestatements for simple operations with parallel conditional logic.
- Prefer nested if/elsever switch/casefor short conditional sequences and complex conditions.
- Prefer polymorphism over switch/caseto encapsulate and delegate complex operations.

## Exceptions

- Do not use try/catchblocks for flow-control.
- Only catchexceptions that you can handle.
- Never declare an empty catch
- Avoid nesting a try/catchwithin a catch
- Always catch the most derived exception via exception filters.
- Order exception filters from most to least derived exception type.
- Avoid re-throwing an exception. Allow it to bubble-up instead.
- If re-throwing an exception, preserve the original call stack by omitting the exception argument from the throw

**Example** :

// Bad!

catch(Exception ex)

{

Log(ex);

throw ex;

}

// Good!

catch(Exception)

{

Log(ex);

throw;

}

- Only use the finallyblock to release resources from a try
- Always use validation to avoid exceptions.

**Example** :

// Bad!

try

{

conn.Close();

}

Catch(Exception ex)

{

// handle exception if already closed!

}

// Good!

if(conn.State != ConnectionState.Closed)

{

conn.Close();

}

- Always set the innerExceptionproperty on thrown exceptions so the exception chain &amp; call stack are maintained.
- Avoid defining custom exception classes. Use existing exception classes instead.
- When a custom exception is required;
  - Always derive from Exception **not** ApplicationException.
  - Always suffix exception class names with the word &quot;Exception&quot;.
  - Always add the SerializableAttributeto exception classes.
  - Always implement the standard &quot;Exception Constructor Pattern&quot;:

public MyCustomException ();

public MyCustomException (string message);

public MyCustomException (string message, Exception innerException);

-
  - Always implement the deserialization constructor:

protected MyCustomException(SerializationInfo info, StreamingContext contxt);

- Always set the appropriate HResultvalue on custom exception classes.

( **Note:** the ApplicationExceptionHResult = -2146232832)

- When defining custom exception classes that contain additional properties:
  - Always override the Messageproperty, ToString()method and the implicit operator string to include custom property values.
  - Always modify the deserialization constructor to retrieve custom property values.
  - Always override the GetObjectData(…)method to add custom properties to the serialization collection.

**Example** :

public override void GetObjectData(SerializationInfo info,

StreamingContext context)

{

base.GetObjectData (info, context);

info.AddValue(&quot;MyValue&quot;, \_myValue);

}

## User Controls

- Always use **uc** for **Tag Prefix** property in the register directive.

// Bad!

\&lt;%@RegisterAssembly=&quot;Assembly&quot;Namespace=&quot;Namespace&quot;TagPrefix=&quot;uc1&quot;%\&gt;

// Good!

\&lt;%@RegisterAssembly=&quot;Assembly&quot;Namespace=&quot;Namespace&quot;TagPrefix=&quot;uc&quot;%\&gt;

## Generics

## Generics is the parameterization of types. It must always be used in the following scenarios:

### Classes

## Must be used when there is a common implementation for more than one class that the only difference is the type.

## Example:

| // Bad |
| --- |
| public class EntityADataProvider{        protected readonly ProjectContext \_Context;        private readonlyDbSet\&lt;EntityA\&gt; \_DbSet;         public EntityADataProvider(ProjectContext context)        {            \_Context = context;            \_DbSet = \_Context.Set\&lt;EntityA\&gt;();        }        public virtualEntityA Add(EntityA entity)        {            \_Context.Set\&lt;EntityA\&gt;().Add(entity);             \_Context.SaveChanges();             return entity;        }}  | public class EntityBDataProvider{        protected readonly ProjectContext \_Context;        private readonlyDbSet\&lt;EntityB\&gt; \_DbSet;         public EntityBDataProvider(ProjectContext context)        {            \_Context = context;            \_DbSet = \_Context.Set\&lt;EntityB\&gt;();        }        public virtualEntityB Add(EntityB entity)        {            \_Context.Set\&lt;EntityB\&gt;().Add(entity);             \_Context.SaveChanges();             return entity;        }}  |

In the previous code the implementation is directly coupled with an Entity and a DataContext. This can be parameterized to increase code quality, to reduce maintenance time, complexity and files quantity.







// Good

public class DataProvider\&lt;TEntity, U\&gt; where TEntity : class, new()

    where U : DbContext

{

        protected readonly U \_Context;

        private readonlyDbSet\&lt;TEntity\&gt; \_DbSet;

        public EntityADataProvider(U context)

        {

            \_Context = context;

            \_DbSet = \_Context.Set\&lt;TEntity\&gt;();

        }

        public virtual TEntity Add(TEntity entity)

        {

            \_Context.Set\&lt;TEntity\&gt;().Add(entity);

            \_Context.SaveChanges();

            return entity;

        }

}

**Note:** _The previous example is just that, an example, do not use it as the final implementation of a DataProvider or Repository._

### Methods

## A method must use generics where the implementation is the same for a method that receive the same set of parameters but the only difference is the type of the parameters.

## Example:

// Bad

DataContextAUnitOfWorkGetDataContextAUnitOfWork();

DataContextBUnitOfWorkGetDataContextBUnitOfWork();

DataContextCUnitOfWorkGetDataContextCUnitOfWork();

// Good

IUnitOfWorkGetDataContextUnitOfWork\&lt;T\&gt;() where T : IUnitOfWork;

# .ASPNET Best Practices and Tips

## Use Paging Eficiently

Allowing users to request and retrieve more data than they can consume puts an unnecessary strain on your application resources. This unnecessary strain causes increased CPU utilization, increased memory consumption, and decreased response times. This is especially true for clients that have a slow connection speed. From a usability standpoint, most users do not want to see thousands of rows presented as a single unit. Implement a paging solution that retrieves only the desired data from the database and reduces back-end work on the database. You should optimize the number of rows returned by the Database Server to the middle-tier web-server. For more information see the following [article](http://weblogs.asp.net/scottgu/archive/2006/01/01/434314.aspx).

## Generate New Encryption Keys

When moving an application to production for the first time it is a good idea to generate new encryption keys.  This includes the machine validation key and decryption key as well as any other custom keys your application may be using.  There is [an article on CodeProject](http://www.codeproject.com/KB/aspnet/machineKey.aspx) that talks about generating machineKeys specifically that should be helpful with this.

## Encrypt Sensitive Sections of your Web.Config

This includes both the connection string and machine key sections.  See [Scott Guthrie&#39;s post](http://weblogs.asp.net/scottgu/archive/2006/01/09/434893.aspx) for some good references.  Note that if your application runs in a clustered environment you will need to share a custom key using the RSA provider as described in an [MSDN article](http://msdn2.microsoft.com/en-us/library/68ze1hb2%28VS.80%29.aspx).

## Set Retail=&quot;True&quot; in your Machine.Config

\&lt;configuration\&gt;
        \&lt;system.web\&gt;
                \&lt;deployment retail=&quot;true&quot;/\&gt;
         \&lt;/system.web\&gt;
\&lt;/configuration\&gt;

This will kill three birds with one stone.  It will force the &#39;debug&#39; flag in the web.config to be false, it will disable page output tracing, and  it will force the custom error page to be shown to remote users rather than the actual exception or error message.  For more information you can read [Scott Guthrie&#39;s post](http://weblogs.asp.net/scottgu/archive/2006/04/11/442448.aspx) or the [MSDN reference](http://msdn2.microsoft.com/en-us/library/ms228298%28VS.80%29.aspx).

## Create a new Application Pool for your Site

When setting up your new site for the first time do not share an existing application pool.  Create a new application pool which will be used by only by the new web application.

## Set the memory limit for your Application Pool

When creating the application pool, specifically set the memory limit rather than the time limit which is set by default.  [Asp.net](http://www.asp.net/) has a [good whitepaper](http://www.asp.net/learn/whitepapers/aspnet-and-iis6/)which explains the value of this:

_By default IIS 6.0 does not set a limit on the amount of memory that IIS is allowed to use. ASP.NET&#39;s Cache feature relies on a limitation of memory so the Cache can proactively remove unused items from memory._

_It is recommended that you configure the memory recycling feature of IIS 6.0._

## Develop a repeatable Deployment Process and Automate It

It is way too easy to make mistakes when deploying any type of software.  This is especially the case with software that uses configuration files that may be different between the development, staging, or production environments.  I would argue that the process you come up with is not nearly as important as it being easily repeatable and automated.  You can fine tune the process as needed, but you don&#39;t want a simple typo to bring a site down.

## Build and Reference Release Versions of All Assemblies

In addition to making sure ASP.NET is not configured in debug mode, also make sure that your assemblies are not debug assemblies.  There are of course exceptions if you are trying to solve a unique issue in your production environment ... but in most cases you should always deploy with release builds for all assemblies.

## Load Test

This goes without saying.  Inevitably, good load testing will uncover threading and memory issues not otherwise considered.

## Turn off Tracing unless until required

Tracing is one of the wonderful features which enable us to track the application&#39;s trace and the sequences. However, again it is useful only for developers and you can set this to &quot;false&quot; unless you require to monitor the trace logging.

How it affects performance:
Enabling tracing adds performance overhead and might expose private information, so it should be enabled only while an application is being actively analyzed.

Solution:
When not needed, tracing can be turned off using
_\&lt;trace enabled=&quot;false&quot; requestLimit=&quot;10&quot; pageoutput=&quot;false&quot; traceMode=&quot;SortByTime&quot; localOnly=&quot;true&quot;\&gt;._

## Turn off Session State, if not required

One extremely powerful feature of ASP.NET is its ability to store session state for users, such as a shopping cart on an e-commerce site or a browser history.

How it affects performance:

Since ASP.NET Manages session state by default, you pay the cost in memory even if you don&#39;t use it. I.e. whether you store your data in in-process or on state server or in a Sql Database, session state requires memory and it&#39;s also time consuming when you store or retrieve data from it.

Solution:
You may not require session state when your pages are static or when you do not need to store information captured in the page. In such cases where you need not use session state, disable it on your web form using the directive, _\&lt;@%Page EnableSessionState=&quot;false&quot;%\&gt;_ In case you use the session state only to retrieve data from it and not to update it, make the session state read only by using the directive, _\&lt;@%Page EnableSessionState =&quot;ReadOnly&quot;%\&gt; ._

## Disable View State of a Page if Possible

View state is a fancy name for ASP.NET storing some state data in a hidden input field inside the generated page. When the page is posted back to the server, the server can parse, validate, and apply this view state data back to the page&#39;s tree of controls.
View state is a very powerful capability since it allows state to be persisted with the client and it requires no cookies or server memory to save this state. Many ASP.NET server controls use view state to persist settings made during interactions with elements on the page, for example, saving the current page that is being displayed when paging through data.

How it affects performance:

 There are a number of drawbacks to the use of view state, however. It increases the total payload of the page both when served and when requested. There is also an additional overhead incurred when serializing or deserializing view state data that is posted back to the server. View state increases the memory allocations on the server. Several server controls, the most well known of which is the DataGrid, tend to make excessive use of view state, even in cases where it is not needed.

Solution:
Pages that do not have any server postback events can have the view state turned off.
The default behavior of the ViewState property is enabled, but if you don&#39;t need it, you can turn it off at the control or page level. Within a control, simply set the EnableViewState property to false, or set it globally within the page using this setting:
_\&lt;%@ Page EnableViewState=&quot;false&quot; %\&gt;_  If you turn view state off for a page or control, make sure you thoroughly test your pages to verify that they continue to function correctly.

## Use the String Builder to concatenate string

How it affects performance:

String is Evil when you want to append and concatenate text to your string. All the activities you do to the string are stored in the memory as separate references and it must be avoided as much as possible. For example: when a string is modified, the run time will create a new string and return it, leaving the original to be garbage collected. Most of the time this is a fast and simple way to do it, but when a string is being modified repeatedly it begins to be a burden on performance: all of those allocations eventually get expensive

Solution:

Use String Builder whenever string concatenation is needed so that it only stores the value in the original string and no additional reference is created.

## Do NOT use Ajax TabContainer Control

Since the Ajax TabCountainer could have a lot of controls with data it will have an impact on the performace of the page. Avoid using this control for web pages as much as possible because of the burden on performance it will create. Instead create web pages that uses User Control to emulate the tabs with links to each page. If for a specific reason this control is needed it should be discussed with Technical Leader for its approval.

## Loading Page for all web applications

Each web application should use the AJAX loading page for the events that look data, buttons that execute some functionality or process intensive logic. It is important to understand that the AJAX loading page works with Asynchronous PostBack events. If for a specific reason this Loading Page is an overkill for the task to be developed it should be first discussed with Technical Leader for its approval.

# Team Explorer Best Practices

## Check-In

Each developer is responsible to check-in the sources he/she is working on. The frequency recommended is daily, if another frequency is needed it must be discussed with the Technical Leader for its approval.

Associate or resolve work items with the changeset during the check-in process.

## Review all the pending changes associated with your workspace.

Use the Get Latest command before checking in your Pending Changes to download the most recent sources from the server and compile your code to make sure that it does not break the build.

##  Check-Out

It is recommended to always check-out with prevention of others making changes to the files that you need to work on. Nevertheless, is important you check-in the code ASAP after you have test it and verified is working correctly. DO NOT leave check-out files for long times of period like Friday before weekends, holidays and vacations.

Since TFS 2012 local workspaces are available. These workspaces maintain more source control metadata locally in your workstation reducing the necessity of explicitly checking-out project resources. These are the preferred workspace type at AFCG as they will avoid project resource availability issues between team members. The use of local workspaces will force the user to manually merge changes in some instances where the IDE is not capable of automatically determining code merging priority, the correct handling of manual code merges is left as a responsibility to each team member. Team members are encouraged to ask other members if any doubts arise in the process of a manual merge especially when merging code not originally written by yourself.

## Shelving and Unshelving

Shelving lets you set aside a batch of pending changes temporarily and optionally remove the pending changes from workspace. The product of the shelve operation is a shelveset. The changes in a shelveset can be restored later into your workspace or into another user&#39;s workspace.

When use shelving? Shelve your pending changes when you are not ready to or cannot check in a set of pending changes. There are primarily five shelve scenarios:

- **Interrupt**    When you have pending changes that are not ready for check in but you need to work on a different task, you can shelve your pending changes to set them aside.
- **Integration**    When you have pending changes that are not ready for check in but you need to share them with another team member, you can shelve your pending changes and ask your team member to unshelve them.
- **Review**    When you have pending changes that are ready for check-in and have to be code-reviewed, you can shelve your changes and inform the code reviewer of the shelveset.
- **Build**    Before you check in your changes, you can use your build system to make sure that the changes in a shelveset will not break your regularly scheduled build processes, such as a nightly build. You can perform this validation manually by queuing a private build or automatically by implementing gated check-in.
- **Backup**    When you have work in progress that you want to back up, but are not ready to check in, you can shelve your changes to have them preserved on the Team Foundation server.
- **Handoff**    When you have work in progress that is to be completed by another team member, you can shelve your changes to make a handoff easier.

 For further explanation see this [video](http://msdn.microsoft.com/en-us/vstudio/bb905524.aspx).

# Database Best Practices

## Table Prefix

Database tables should have a prefix associated per module in the application. For example: SYS for system, WKF for workflow. After each prefix should have an underscore &quot;\_&quot;.

Use CODE prefix for lookup tables and CONF prefix for configuration tables.

## Table Name

After prefix is used the table name should be named using Pascal Case, were the first letter of each word is CAPITLIZED.  For example:  PEI\_WorkflowStep.

## Field Name

Each table field name should be named using Pascal Case, were the first letter of each word is CAPITLIZED.  For example:  PEI\_Student.FirstName.

## Fields Required and Order

Each table must contain the following required fields: CreatedBy, CreatedDate, UpdatedBy, Updated Date and IsDeleted. The order established for the table fields is:

1. Primary Key ID
2. Foreign Keys ID
3. Other Fields
4. Required Fields (CreatedBy, CreatedDate, etc.)

# Acronyms

## List of Acronyms

| **Acronym** | **Definition** |
| --- | --- |
| .NET | Microsoft&#39;s implementation of the entire CLI stack, including the CLR (Common Language Runtime), CIL (Common Intermediate Language), and various languages, all of which are CLS (Common Language Specification)-compliant. |
| ADO.NET | ActiveX Data Object for .NET.NET acronym for &quot;ADO for .NET&quot;. Collection of COM objects wrapped for .NET for accessing different types of data sources: databases, XML, objects. |
| ASP.NET | Active Server Pages for .NET.NET acronym for &quot;ASP for .NET&quot;. Microsoft&#39;s server-side script engine for creating dynamic web pages using .NET. |
| BCL | Base Class LibraryCore set of class libraries defined by CLI, with foundational types and APIs, support for collections, simple file access, some security, fundamental data types and streams, that programs may employ. |
| C# | C Sharp.NET-based object-oriented programming language, created by Microsoft, defined by the C# Language Specification and ratified by the ECMA and ISO standards bodies. C# was inspired from other powerful languages like C++, Java, Delphi and Visual Basic. |
| C++ | C Plus Plus C++ (programming language). |
| CAO | Client Activated ObjectObjects used in .NET Remoting, created on the server upon a client&#39;s request. |
| CCW | COM Callable WrapperUnable to reference a .NET object directly, COM clients use the CCW as a proxy for the managed object, generated by the CLR (Common Language Runtime). See also the RCW (Runtime Callable Wrapper), the proxy generated for .NET objects using COM. |
| CIL | Common Intermediate LanguageInitially called MSIL (Microsoft Intermediate Language), CIL is a low-level intermediate programming language defined by the CLI specification, used by the .NET Framework and Mono. .NET-based higher-level source languages like C# or VB.NET compile their source code into CIL using a language specific compiler. The CIL enables programming language interoperability and platform portability. |
| CLI | Common Language InfrastructureSpecification that defines the IL (Intermediate Language), base classes, and behavioral characteristics which enable implementers to create VES (Virtual Execution Systems) and compilers in which source languages are interoperable on top of a common execution environment. CLI is also a subset of the CLR (Common Language Runtime) and base class libraries that Microsoft has submitted to ECMA so that a third-party vendor can build .NET runtimes on other platforms. |
| CLR | Common Language Runtime.NET abbreviation for Microsoft&#39;s implementation of the .NET runtime, as defined in the CLI (Common Language Infrastructure) specification. The CLR runs code in the form of bytecodes (code of bytes). |
| CLS | Common Language Specification.NET acronym for the set of language rules that defines language standards for a .NET language and .NET types. CLS compliant types, using the CLSCompliant attribute in their declaration, may be used across any .NET language. |
| COM | Component Object ModelBinary-interface standard for software componentry introduced by Microsoft prior to .NET. COM enabled interprocess communication and dynamic object creation in a large range of programming languages. COM is also an umbrella term that encompasses the OLE, OLE Automation, ActiveX, COM+ and DCOM technologies. COM clients can access .NET objects through a CCW (COM Callable Wrapper) proxy, while .NET clients can use COM components through a similar RCW (Runtime Callable
Wrapper) proxy. |
| CTS | Common Type SystemCTS defines a common set of data types that can be used with many different language syntaxes. Within the CTS, types are broken down into two categories: values and objects. Each .NET-based language built on the CLR, like C# and VB.NET, will use some of the types defined by the CTS. CTS is at the core of .NET Framework&#39;s cross-language integration, type safety, and high-performance code execution. |
| DNS | A system used on the Internet to map the easily remembered names of host computers (domain names) to their respective Internet Protocol (IP) numbers. A software database program that converts domain names to Internet Protocol addresses, and vice versa. |
| FCL | Framework Class Library.NET abbreviation for the Microsoft-specific library that adds to the BCL (Base Class Library) and includes support for rich client user interfaces, web user interfaces, database access, distributed communication etc. |
| GAC | Global Assembly CacheCentral repository of reusable libraries in any .NET environment, where the CLR (Common Language Runtime) is installed. The GAC stores assemblies specifically designated to be shared by several applications on the computer. |
| GC | Garbage CollectorAutomatic memory management system through which objects that are not referenced are cleared up from the memory. |
| HTML | HTML means &quot;Hypertext Markup Language&quot;. |
| IIS | (Internet Information Services) Microsoft&#39;s Web server. IIS runs under the server versions of Windows, adding HTTP server capability to the Windows operating system. Formerly known as &quot;Internet Information Server&quot;. |
| IL | Intermediate LanguageAnother short .NET acronym for CIL (Common Intermediate Language) or MSIL (Microsoft Intermediate Language), IL is the platform independent compiled form of the .NET language source code. |
| ILASM | MSIL AssemblerTool to generate a PE (portable executable) file from MSIL (Microsoft Intermediate Language). |
| ILDASM | MSIL DisassemblerCompanion tool to the ILASM (MSIL Assembler), that takes a PE (portable executable) file that contains MSIL (Microsoft Intermediate Language) code and creates a text file suitable as input to the assembler. |
| IO | Input and output usually used for operations over computer files. |
| IP | Internet Protocol address. |
| J# | Visual J SharpProgramming language for the .NET Frameworks, developed by Microsoft India as a transitional language for programmers of Java and Microsoft&#39;s Visual J++ languages. |
| MSIL | Microsoft Intermediate LanguageLater renamed as CIL (Common Intermediate Language). |
| PE | Portable ExecutableEXE format file that is portable, which for .NET binaries contains MSIL (Microsoft Intermediate Language) and the required metadata. |
| RCW | Runtime Callable Wrapper.NET abbreviation for the proxy generated by the CLR (Common Language Runtime), used when a .NET object needs to use a COM component. See also the CCW (COM Callable Wrapper), a similar proxy required by COM objects using .NET managed components. |
| TTL | Time To Live (IP networking). |
| UI | User interface. |
| VB.NET | Visual Basic for .NET.NET acronym for &quot;VB for .NET&quot;. Implementation of Microsoft&#39;s popular Visual Basic language for .NET Frameworks. |
| VES | Virtual Execution SystemVES is an agent that manages the execution of managed code, of programs compiled for the CLI (Common Language Infrastructure), with support for built-in data types and exception handling. |
| WC | Windows CardspaceMicrosoft&#39;s client software for the Identity Metasystem, in .NET Framework 3.0. WC enables users to secure and store digital identities of a person, and a provision to a unified interface for choosing the identity for a particular transaction, like logging in to a website. |
| WCF | Windows Communication FoundationMicrosoft framework in .NET 3.0 for building service-oriented applications, sending data as asynchronous messages from one service endpoint to another. The messages can be as simple as a single character or word sent as XML, or as complex as a stream of binary data. |
| WF | Windows Workflow FoundationMicrosoft technology in the .NET Framework 3.0, for defining, executing, and managing workflows. |
| WPF | Windows Presentation FoundationGraphical subsystem for rendering user interfaces in Windows-based applications, developed by Microsoft in the .NET 3.0 Framework. |
| XAML | Extensible Application Markup LanguageDeclarative XML-based markup language, created by Microsoft for WPF (Windows Presentation Foundation), to simplify creation of user interfaces for .NET Framework applications. You can create visible UI elements in the declarative XAML markup, and then separate the UI definition from the run-time logic by using code-behind files, joined to the markup through partial class definitions. |
| XML | XML means &quot;eXtensible Markup Language&quot;. |



# References

The following references were used in the creation of this Coding Standards Guide.

- Encodo C# Handbook
[http://archive.msdn.microsoft.com/encodocsharphandbook/Release/ProjectReleases.aspx?ReleaseId=3352](http://archive.msdn.microsoft.com/encodocsharphandbook/Release/ProjectReleases.aspx?ReleaseId=3352)
- CSharp Coding Standards
[http://weblogs.asp.net/lhunt/pages/CSharp-Coding-Standards-document.aspx](http://weblogs.asp.net/lhunt/pages/CSharp-Coding-Standards-document.aspx)
- Microsoft All-In-One Code Framework Coding Guideline
[http://1code.codeplex.com/wikipage?title=All-In-One%20Code%20Framework%20Coding%20Standards&amp;referringTitle=Documentation](http://1code.codeplex.com/wikipage?title=All-In-One%20Code%20Framework%20Coding%20Standards&amp;referringTitle=Documentation)
- C# / VB.Net Coding Guidelines
[http://submain.com/blog/FreeCVBNETCodingGuidelinesEbookDownload.aspx](http://submain.com/blog/FreeCVBNETCodingGuidelinesEbookDownload.aspx)
- Top 10 Best Practices for Production ASP.NET Applications
[http://daptivate.com/archive/2008/02/12/top-10-best-practices-for-production-asp-net-applications.aspx](http://daptivate.com/archive/2008/02/12/top-10-best-practices-for-production-asp-net-applications.aspx)
- Best Practices to Improve ASP.Net Web Application Performance
[http://www.dotnetfunda.com/articles/article45.aspx](http://www.dotnetfunda.com/articles/article45.aspx)
- ASP.NET Best Practices for High Performance Applications
[http://www.codeproject.com/KB/aspnet/ASPNET\_Best\_Practices.aspx](http://www.codeproject.com/KB/aspnet/ASPNET_Best_Practices.aspx)

# Attachment I – Internal Practices

## Code Separation by Concern

Most of our development projects are organized in tiers to achieve code decoupling by concern. This architecture aims to separate code into at least a presentation tier, business logic tier and data access tier. This separation of concerns is not easy to achieve when working with WebForms projects as a lot of code tends to end up coupled with the presentation layer because of how this framework organizes markup and related logic (aspx markup files and related aspx.cs &quot;Code Behind files&quot;).

It is important for each developer to organize the code he/she produces into the correct layer to mitigate these code coupling issues and help maintain a more testable codebase.

## Date Entry Controls

To establish a common standard, all date picker, calendars or any other date data entry controls should limit their valid date entry values to past dates including today&#39;s date. Any deviation from this rule should be documented in the corresponding technical specification.

## Database Transaction Management

It is expected of all developers to correctly manage multi-step processes between application code and database. Specifically, the use of transactions to handle atomicity is of crucial importance. The correct use of transactions is required in cases where multiple trips to the database are needed but each trip is considered part of an atomic operation which should not complete partially. This is needed to ensure that previous steps executed before an error was generated don&#39;t commit changes to the database which would leave data in an incongruent state.

## Model Binding

Projects using ASP.NET 4.5 or higher must implement model binding features for a more straight-forward interaction with data, such as binding data controls directly to select, insert, update and delete functionality, binding values from the data-control onto the object using the TryUpdateModel call, among other benefits.

## LINQ Query Execution Read Uncommitted

To prevent table locks, set the Isolation level of a transaccion to Read Uncommitted.

The [System.Transactions](https://docs.microsoft.com/en-us/dotnet/api/system.transactions?view=netframework-4.8) namespace contains classes that allow you to write your own transactional application and resource manager. Specifically, you can create and participate in a transaction (local or distributed) with one or multiple participants.

The data affected by a transaction is called volatile. When you create a transaction, you can specify the isolation level that applies to the transaction. The isolation level of a transaction determines what level of access other transactions have to volatile data before a transaction completes.

The lowest isolation level, ReadUncommitted, allows many transactions to operate on a data store simultaneously and provides no protection against data corruption due to interruptive transactions.

Reference [https://docs.microsoft.com/en-us/dotnet/api/system.data.isolationlevel?view=netframework-4.8](https://docs.microsoft.com/en-us/dotnet/api/system.data.isolationlevel?view=netframework-4.8)