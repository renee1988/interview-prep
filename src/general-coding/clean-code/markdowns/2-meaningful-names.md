## Meaningful Names
The name of a variable, function or class should answer all the big questions. It should tell you:
* why it exists
* what it does
* how it is used

Programmers must avoid leaving false clues that obscure the meaning of code.
* Number-series naming (a1, a2, ..., aN) is the opposite of intentional naming.
* Noise words are another meaningless distinction.
* Noice words are redundant.

Use searchable names.
* Single-letter names and numeric constants have a particular problem in that they are not easy to locate across a body of text.
* The length of a name should correspond to the size of its scope. If a variable or constant might be seen or used in multiple places in a body of code, it is imperative to give it a search-friendly name.

Avoid encoding. Encoding type or scope information into names simply adds an extra burden of deciphering.

Avoid mental mapping. A single-letter name is a poor choice, since it requires the reader to mentally map to actual concept.

When constructors are overloaded, use static factory methods with names that describe the arguments (Effective Java: item 1).

Pick one word per concept, and stick with it. Do not pun.