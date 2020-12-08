(this["webpackJsonpinterview-prep"]=this["webpackJsonpinterview-prep"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(39)},,,,,function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t){e.exports='<h3 id="synchronous-vs-asynchronous-computing">Synchronous vs. Asynchronous computing</h3> <p>The main difference between synchronous and asynchronous computing/code is <strong>latency/waitime</strong>.</p> <h4 id="blocking-code">Blocking code</h4> <p>Synchronous execution occurs when each block of code must wait for the previous block to complete before running.</p> <ul> <li>Easy to implement</li> <li>Easy to understand</li> <li>Easy to debug</li> </ul> <p>JavaScript is a single-threaded language. Writing blocking code creates awful user experience.</p> <ul> <li>waiting for AJAX call to return</li> <li>waiting for database operations to complete The entire application would pause/sit idle waiting for the data to be loaded and wasting precious computing cycles that could be executing other code.</li> </ul> <p>Other than horrible user experience, browsers may deem your scripts unresponsive after a certain period of inactivity and terminate them.</p> <h4 id="non-blocking-code-with-callback-functions">Non-blocking code with callback functions</h4> <img src="https://renee1988.github.io/panda-learning-cs//images/rx-js-cb.png"> <p>As a single-threaded language, JavaScript provides callback functions to tackle the problem of blocking for long-running operations to complete by allowing you to provide a handler function that the JavaScript runtime will invoke once the data is ready to use.</p> <ul> <li>JavaScript callback functions create <strong>inversion of control</strong> where functions call the application back insetad of the other way around.</li> <li>Inversion of control refers to the way in which certain parts of your code receive the flow of control back from teh runtime system.</li> </ul> <p>Callback functions allow you to invoke code asynchronously, so that the application can return control to you later. This allows the program to continue with any other task in the meantime.</p> <h4 id="time-and-space">Time and space</h4> <ul> <li>Synchronous functions allows us to reason directly about the state of the application</li> <li>Asynchronous code forces us to reason about its <strong>future</strong> state</li> </ul> <p>For example, if you have three functions performing three independent tasks, then executing them in any order wouldn&#39;t matter. However, if they are sharing some global state, their behavior would be determined by the order in which they were called -&gt; <strong><em>Side Effect</em></strong></p> <h4 id="callback-or-rxjs">Callback or RxJS?</h4> <ul> <li>If your script issues a single remote HTTP request, RxJS is an overkill, callbacks remain the perfert solution.</li> <li>RxJS begins to shine when implementing state machines of advanced complexity such as:<ul> <li>dynamic UIs: rich UI made up of several widgets on the page that interact with each other</li> <li>service orchestration: orchestrate the execution of several business process that consumes several microservice, data mashups</li> </ul> </li> </ul> <pre><code class="language-javascript">// Example: callback hell\najax(\n    &#39;&lt;host1&gt;/items&#39;,\n    items =&gt; {\n        items.forEach(item =&gt; {\n            ajax(`&lt;host2&gt;/items/${items.getId()}/info`, dataInfo =&gt; {\n                ajax(`&lt;host3&gt;/files/${dataInfo.files}`, processFiles)\n            });\n        });\n    },\n);</code></pre> <h4 id="event-emitters">Event Emitters</h4> <p>Event emitter is a popular mechanism for asynchronous event-based architecture.</p> <ul> <li><strong>DOM</strong> is an event emitter.</li> <li><code>EventEmitter</code> class in NodeJs is used to implement APIs:<ul> <li>WebSocket I/O</li> <li>File reading &amp; writing</li> </ul> </li> </ul> '},function(e,t){e.exports='<p>There are three kinds of throwables:</p> <ul> <li>checked exceptions</li> <li>runtime exceptions</li> <li>errors</li> </ul> <h2 id="guidance-on-when-to-apply-different-types-of-throwables">Guidance on when to apply different types of throwables</h2> <p><em>Use checked exceptions for conditions from which the called can reasonably be expected to recover.</em></p> <p>By throwing a checked exception, you force the caller to handle the exception in a <code>catch</code> clause or to propagate it outward.</p> <pre><code class="language-java">public class SomeClass {\n  // ...\n  // ...\n  public void mightThrow(...) throws SomeException {\n      // ...\n  }\n}</code></pre> <p>With a checked exception, the API designer presents a mandate to recover from the condition.</p> <ul> <li>User can choose to disregard the mandate by catching the exception and ignoring it, which is usually <em>a bad idea</em>.</li> </ul> <p>Since checked exceptions indicate recoverable conditions, it is especiallly important for them to provide methods that furnish information to help the caller recover from the exceptional condition.</p> <p>Example:</p> <p>A checked exception is thrown when an attempt to make a purchase with a gift card fails due to insufficient funds.</p> <p>In this case, the exception should provide an accessor method to query the amount of the shortfall.</p> <p>There are two kinds of unchecked throwables:</p> <ul> <li>runtime exceptions</li> <li>errors They behave the same, both are throwables that needn&#39;t and shouldn&#39;t be caught.</li> <li>If a program throws an unchecked exception or an error, it is the case that recovery is impossible and continued execution would do more harm than good.</li> <li>If a program does not catch such a throwable, it will cause the current thread to halt with an appropriate error message.</li> </ul> <p><em>Use runtime exceptions to indicate programming errors.</em></p> <p>It is not always clear whether you are dealing with a recoverable conditions or a programming error (e.g., resource exhaustion).</p> <p>If it isn&#39;t clear whether recovery is possible, you are better off using an unchecked exception.</p> <p><em>Never implement any new <code>Error</code> subclasses.</em></p> <ul> <li>Errors are reserved for us by the JVM to indicate resource deficiencies, invariant failures or other conditions that make it impossible to continue execution.</li> </ul> <p><em>All of the unchecked throwables implemented should subclass <code>RuntimeException</code>.</em></p> <p>It is possible to define a throwable that is not a subclass of <code>Exception</code>, <code>RuntimeException</code> or <code>Error</code>. They behave as ordinary checked exceptions (subclasses of <code>Exception</code> but not <code>RuntimeException</code>) -&gt; Never implement it -&gt; confuse the consumers of your API.</p> <h2 id="summary">Summary</h2> <ul> <li>Throw checked exceptions for recoverable conditions.</li> <li>Trhow unchecked exceptions for programming errors.</li> <li>When in doubt, throw unchecked exceptions.</li> <li>Do not define any throwables that are neither checked exception nor runtime exceptions.</li> <li>Provide methods on your checked exceptions to aid in recovery.</li> </ul> '},function(e,t){e.exports='<h1 id="use-exceptions-only-for-exceptional-conditions">Use exceptions only for exceptional conditions</h1> <pre><code class="language-java">try {\n    int i = 0;\n    while(true) {\n        range[i++].climb();\n    }\n} catch(ArrayIndexOutOfBoundsException e) {}</code></pre> <p>The inifinite loop terminates by throwing, catching and ignoring an <code>ArrayIndexOutOfBoundsException</code> when it attempts to access the first array element outside the bounds of the array.</p> <p>Why would someone write the code above?</p> <p>Reasoning: VM checks the bounds of all array accesses, the normal loop termination test -- hidden by the compiler but still present in the for-each loop -- is redundant and should be avoided.</p> <p>What is wrong with the reasoning above?</p> <ul> <li>Exceptions are designed for exceptional circumstances, there is little incetive for JVM implementors to make them as fast as explicit tests.</li> <li>Placing code inside a try-catch block inhibits certain optimizations that JVM implementations might otherwise perform.</li> <li>The standard idiom for looping through an array doesn&#39;t necessarily result in redundant checks. Many JVM implementations optimize them away.</li> <li>In fact, exception-based idiom is far slower than the standard one.</li> </ul> <p>What else is wrong with the code above?</p> <ul> <li>It is not guaranteed to work. If there is a bug in the loop, the use of exceptions for <em>flow control</em> can mask the bug.<ul> <li>If a reasonable loop idiom is used, the bug would generate an uncaught exception, resulting in immediate thread termination with a full stack trace.</li> <li>If the exception-based loop idiom is used, the bug-related exception would be caught and misinterpreted as a normal loop termination.</li> </ul> </li> </ul> <p><strong>Exceptions are to be used only for exceptional conditions, they should never be used for ordinary control flow.</strong></p> <p>A class with a &quot;state-dependent&quot; method that can be invoked only under certain unpredictable conditions should generally have a separate &quot;state-testing&quot; method indicating whether it is appropriate to invoke the state-dependent method.</p> <ul> <li>Example: iterator.next() &amp; iterator.hasNext()</li> </ul> <p>An alternative to providing a separate state-testing method is to have the state-dependent method return an empty optional or a distinguished return value (<code>null</code>).</p> <p>If an object is to be accessed concurrently without external synchronization or is subject to externally induced state transitions, <em>you must use an optional or distinguished return value</em>, as the object state could change in the interval between the invocation of a state-testing method and its state-dependent method.</p> <p>Performance concerns may dictate that an optional or distinguished return value be used if a separate state-testing method would duplicate the work of the state-dependent method.</p> <p>State-testing method is mildly preferrable to a distinguished return value.</p> <ul> <li>Readability.</li> <li>Incorrect use may be easier to detect.<ul> <li>if you forget to call a state-testing method, the state-dependent method will throw an exception, making the bug obvious</li> <li>if you forget to check for a distinguished return value, the bug may be subtle</li> </ul> </li> </ul> '},function(e,t){e.exports='<h1 id="what-the-heck-is-event-loop">What the heck is Event Loop</h1> <ul> <li>Event loop is a mechanism that handles executing multiple chunks of your program over time</li> <li>At each moment, it invokes the JavaScript engine</li> <li>JavaScript engine has no sense of time</li> <li>It is an on-demand execution environment for any snippet of javascript</li> <li>Event loop is an array that acts as a queue</li> <li>Event loop breaks its works into tasks and executes them in serial</li> <li>Event loop does not allow parallel access and changes to shared memory</li> <li>JavaScript never shares memory across threads</li> <li>JavaScript is single-threaded, but browser is not</li> <li>Process 1 and process 2 run concurrently task-level in parallel, but their individual events run sequentially on the event loop queue</li> </ul> '},function(e,t){e.exports='<h1 id="typescript-is-">TypeScript Is ...</h1> <ul> <li>A programming language, a compiler and a language server<ul> <li>Language server: serves autocompletes in VS code</li> </ul> </li> <li>A syntactic superset of JavaScript<ul> <li>It builds on top of the existing JavaScript syntax</li> </ul> </li> <li>The core of the best JS environment available today</li> <li>&quot;A fancy linter&quot; and a fantastic static analysis tool<ul> <li>Type checking</li> <li>Make sure you are following through the garuantees you intend to make</li> </ul> </li> </ul> <h1 id="what-problems-does-ts-help-solve">What problems does TS help solve?</h1> <ul> <li>Duck typed languages start to hurt more as codebases get large<ul> <li>hard to keep contracts between modules under control</li> </ul> </li> <li>Informal contracts grow organically, formal ones grow deliberately</li> <li>JS authoring environments are worlds behind the UX of &quot;modern IDEs&quot;</li> <li>Too many JS errors are discovered at <em>runtime</em>.</li> </ul> '},function(e,t){e.exports='<h2 id="latest-javascript-features">Latest JavaScript Features</h2> <h3 id="optional-chaining">Optional Chaining</h3> <pre><code class="language-ts">// Example:\nlet x: {\n    user: {    \n        name: string;\n        address?: {\n            street: string;\n            city: string;\n        };\n    }\n} = undefined as any;\n\n// Optional Chaining\n// &quot;?&quot; adds a condition to the following code:\n// If x.user.address exists, log the city\n// otherwise, log undefined\nconsole.log(x.user.address?.city);</code></pre> <h3 id="nullish-coalescing">Nullish Coalescing</h3> <pre><code class="language-ts">class Foo {\n    #name: string;\n    // `constructor(public name?: string)` is a shorthand\n    // for having a class member field `name`.\n    constructor(rawName?: string) {\n        // Nullish coalescing: `??`\n        // If the `rawName` is *null* or *undefined*, fall back to the value &#39;no name&#39;.\n        // IMPORTANT: `??` is different from `||`\n        // If we use `||` here, we will run into surprises of falsy values\n        // (e.g., empty strings or 0&#39;s, they are not Nullish).\n        this.#name = rawName ?? &#39;no name&#39;;\n    }\n\n    log() {\n        console.log(this.#name);\n    }\n}</code></pre> <h3 id="private-fields">Private Fields</h3> <p><code>\\#some_variable</code> vs <code>private some_variable</code></p> <ul> <li><code>private some_variable</code>: when someone sets a debugging breakpoint within the class, they can still see <code>some_variable</code> as a memeber field of this class.</li> <li><code>\\#some_variable</code>: when some sets a debugging breakpoint within the class, they <em>cannot</em> see <code>\\#some_variable</code>.</li> <li>Prefixing a member variable with <code>\\#</code> turns the member variable <em>truly</em> private.</li> <li>Child classes will not have access or know this member variable, it is not inherited.</li> </ul> <h2 id="latest-typescript-features">Latest TypeScript Features</h2> <h3 id="inference-class-field-types">Inference Class Field Types</h3> <p>Types for class fields that are assigned in constructor are inferred, and no longer need an explicit type declaration.</p> <h3 id="tuple-types">Tuple Types</h3> <pre><code class="language-ts">type Foo&lt;T extends any[]&gt; = [boolean, ...T, boolean];</code></pre> <h4 id="labeled-tuple-types">Labeled Tuple Types</h4> <pre><code class="language-ts">type Address = [\n    streetNumber: number,\n    city: string,\n    state: string,\n    postalCode: number,\n];\n\nfunction printAddress(...address: Address) {\n    // ...\n}</code></pre> <ul> <li>The IDE displays the labeled types, it makes the function signature much easier to understand.</li> <li>If you are serializing data (e.g., getting API responses), this saves a lot of space.<ul> <li>Imagine you are getting 50KB of JSON data from an API call. The tuple representation is a more compact way to represent the same data than an object.</li> </ul> </li> </ul> <h3 id="type-aliases-and-interfaces">Type Aliases and Interfaces</h3> <pre><code class="language-ts">// Old way of defining a JSON array\ntype JSONValue = string|number|boolean|null|JSONArray|JSONObject;\ninterface JSONObject = {\n    [k: string]: JSONValue;\n}\ninterface JSONArray extends Array&lt;JSONValue&gt; {}</code></pre> <h4 id="recursive-type-aliases">Recursive Type Aliases</h4> <pre><code class="language-ts">type JSONValue =\n    | string\n    | number\n    | boolean\n    | null\n    | JSONValue[]\n    | {\\[k: string\\]: JSONValue;};</code></pre> <h3 id="template-typed-literals">Template Typed Literals</h3> <pre><code class="language-ts">type Corner = \\`${\\\\&quot;top\\\\&quot; | \\\\&quot;bottom\\\\&quot;}-${\\\\&quot;left\\\\&quot; | \\\\&quot;right\\\\&quot;}\\`;</code></pre> <p>The type <code>Corner</code> can only have values: &quot;top-left&quot;, &quot;top-right&quot;, &quot;bottom-left&quot; and &quot;bottom-right&quot;.</p> <h3 id="error-and-assertion-handling">Error and Assertion Handling</h3> <h4 id="ts-expect-error">@ts-expect-error</h4> <ul> <li><code>// @ts-expect-error</code> suppresses the type errors.<pre><code class="language-ts">// @ts-expect-error\nconst num: number = \\\\&quot;hello\\\\&quot;;</code></pre> </li> <li><code>// @ts-ignore</code> suppresses the type errors.<pre><code class="language-ts">// @ts-ignore\nconst num: number = \\\\&quot;hello\\\\&quot;;</code></pre> </li> <li>ts-ignore vs. ts-expect-error<ul> <li>Always use ts-expect-error over ts-ignore</li> <li>If later on the type is corrected from string to number, ts-expect-error will show error: Unused @ts-expect-error directive.</li> <li>@ts-expect-error: the following line of code has error but I choose to suppress the error. This brings attention to the developer that the bypass is no longer necessary.</li> <li>@ts-ignore: if the following line of code has any type of errors, supporess it. The code can perfectly be fine and have no errors.</li> </ul> </li> </ul> <h4 id="type-unknown-on-catch-clause">Type <code>unknown</code> on <code>catch</code> Clause</h4> <ul> <li>Big improvement over <code>any</code></li> <li>Forces you to deal with <code>instanceof Error</code> properly<pre><code class="language-ts">function somethingRisky() {}\ntry {\n  somethingRisky();\n} catch(error: unknown) {\n  if (error instanceof Error) {\n      console.log(error.stack);\n  } else {\n      console.log(error);\n  }\n}</code></pre> </li> </ul> <h4 id="assertion-functions">Assertion Functions</h4> <pre><code class="language-ts">function isError(error: any): error is Error {\n    return error instanceof Error;\n}</code></pre> <ul> <li>The return type of the function above is not only a boolean but an indication of whether the value is of type <code>Error</code>.</li> </ul> <p>With the new assertion function feature:</p> <pre><code class="language-ts">function assertIsError(error: any): asserts error is Error {\n    if (!(error instanceof Error)) {\n        throw new Error(`Not an error: ${error}`);\n    }\n}\n\ntry {\n    somethingRisky();\n} catch (error: unknown) {\n    assertIsError(error);\n    console.log(error.stack);\n}</code></pre> <h4 id="import-types">Import Types</h4> <pre><code class="language-ts">import type {someFunction} from \\\\&quot;./util\\\\&quot;;</code></pre> <p>The code above only imports the type information of <code>someFunction</code>.</p> <p>If you are using module bundlers like WebPack, you know that WebPack analyzes the code you import as a mechanism to split your code (so that you don&#39;t need to send code you don&#39;t need on page load).</p> <p>Type imports is a way that we can refer to a type in a module without actually importing the entire function, this will not trigger additional code to be included in your bundle.</p> '},function(e,t){e.exports='<h1 id="app-vs-library-concerns">App vs. Library Concerns</h1> <h2 id="if-you-are-using-typescript">If you are using TypeScript</h2> <ul> <li>Improve developer experience, including in-editor docs for your dependencies</li> <li>Reduce needs to drill into files to understand how adjacent code works</li> <li>TypeScript allows you to encode more information into your source files</li> <li>Easier to catch incomplete refactoring</li> </ul> <h2 id="app-specific-concerns">App-specific concerns</h2> <ul> <li>More richness when working with data.</li> <li>Better encapsulation tools (e.g., <code>private</code>, <code>protected</code>, <code>public</code>), to facilitate maintaining lazy loading boundaries (e.g., import types only).</li> <li>Improve major version upgrades story for typed libraries.</li> </ul> <h2 id="library-specific-concerns">Library-specific concerns</h2> <ul> <li>Create and maintain a deliberate public API surface while still being able to create a private API surface to use between modules or components.</li> <li>API documentations</li> </ul> '},function(e,t){e.exports='<h1 id="create-a-project-from-scratch">Create a Project from Scratch</h1> <h2 id="step-1---create-a-folder">Step 1 - Create a folder</h2> <pre><code class="language-shell">\\\\# Create a new folder\nmkdir my-lib\ncd my-lib\n\n\\\\# Download gitignore package and use this package as a CLI tool\n\\\\# and pass an argument \\\\&quot;node\\\\&quot; to it.\n\\\\# This generates a .gitignore file with all the files that you\n\\\\# do not care to commit to Git while developing a node app.\nnpx gitignore node\n\n\\\\# Create a starting-point package.json\n\\\\# Answer \\\\&quot;yes\\\\&quot; to all the question promoted\nyarn init --yes</code></pre> <p>The following is the output <code>package.json</code> file:</p> <pre><code class="language-json">{\n  &quot;name&quot;: &quot;my-lib&quot;,\n  &quot;version&quot;: &quot;1.0.0&quot;,\n  &quot;main&quot;: &quot;index.js&quot;,\n  &quot;license&quot;: &quot;MIT&quot;\n}</code></pre> <h2 id="step-2---modify-packagejson">Step 2 - Modify package.json</h2> <ol> <li><code>main</code> is the entry point of your library. We want to modify it to point to <code>dist/index.js</code>.</li> <li>Add scripts/commands</li> </ol> <pre><code class="language-json">{\n  &quot;name&quot;: &quot;my-lib&quot;,\n  &quot;version&quot;: &quot;1.0.0&quot;,\n  // Entry point path\n  &quot;main&quot;: &quot;dist/index.js&quot;,\n  // The location where consumers can find the type definitions\n  &quot;types&quot;: &quot;dist/index.d.ts&quot;,\n  &quot;license&quot;: &quot;MIT&quot;\n  &quot;scripts&quot;: {\n      // Run TypeScript compiler\n      &quot;build&quot;: &quot;tsc&quot;,\n      // Since this is going to be a small library, we want to\n      // only rebuild on change, and tsc by default clears out\n      // all the output before rebuild. preserveWatchOutput is\n      // to keep the error &amp; warning logs.\n      &quot;dev&quot;: &quot;yarn build --watch --preserveWatchOutput&quot;\n      &quot;lint&quot;: &quot;eslint src --ext js,ts&quot;,\n      &quot;test&quot;: &quot;jest&quot;\n  }\n}</code></pre> <h2 id="step-3---install-dependencies">Step 3 - Install dependencies</h2> <pre><code class="language-shell">yarn add -D typescript eslint jest</code></pre> '},function(e,t){e.exports='<h1 id="declaration-files--type-only-imports">Declaration Files &amp; Type-only Imports</h1> <pre><code class="language-shell">\\\\# Create a standard tsconfig.json file\nyarn tsc --init</code></pre> <p>We need to modify the tsconfig.json file since the initialized one is too permissive for production use.</p> <pre><code class="language-json">...\n...\n// The property \\\\&quot;target\\\\&quot; is the language level that we wish to support.\n// This is not the language level allowed in your code. This is the language\n// level we will be compiling out to.\n// Change from \\\\&quot;es2015\\\\&quot; to \\\\&quot;ES2018\\\\&quot;\n\\\\&quot;target\\\\&quot;: &quot;ES2018&quot;,\n...\n...\n// Enable types: type declaration files to be included in compilation.\n\\\\&quot;types\\\\&quot;: [],\n...\n...\n// Change the output directory from \\\\&quot;./\\\\&quot; to \\\\&quot;dist\\\\&quot;.\n// TypeScript compiler by default will put the output JavaScript file and type\n// declaration file as siblings of the TypeScript compiler input file. This\n// might complicate things when we want to clear the output files since they\n// they are in the same folder as the source file.\n\\\\&quot;outDir\\\\&quot;: \\\\&quot;dist\\\\&quot;,\n...\n...\n// This controls the folder structure within the dist folder.\n// If we have an index.ts file in src folder, we will have an index.js in dest\n// folder.\n\\\\&quot;rootDir\\\\&quot;: \\\\&quot;src\\\\&quot;,\n...\n...\n// Disable skipLibCheck\n...\n...\n// Enable declaration since we are building a library and we want to generate\n// .d.ts files.\n...\n...\n// Enable strict.\n...\n...\n// Add stripInternal: take out \\\\@Internal annotated fields from the type\n// declaration file.\n\\\\&quot;stripInternal\\\\&quot;: true,\n...\n...\n// At the end of the file, add the following:\n\\\\&quot;include\\\\&quot;: [\\\\&quot;src\\\\&quot;]</code></pre> '},function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),a=n(15),r=n.n(a),s=(n(22),n(10)),l=n(1),c=n(8),u=Object(o.memo)((function(e){var t=e.menuConfig,n=e.onClick,o=e.parent,a=e.showSubMenu;return i.a.createElement("div",{key:t.route,className:"".concat(o?"sub-menu-item":"menu-item-container"," ").concat(a?"expanded":"")},i.a.createElement("div",{key:"display-name",className:"menu-item-display-name","data-menuname":t.displayName,"data-route":t.route,onClick:n},i.a.createElement("div",{key:"text"},t.displayName),a&&i.a.createElement("div",{key:"arrow",className:"selected-arrow"},"\u21a0")),a&&t.subMenu&&i.a.createElement(p,{menus:t.subMenu,parent:t}))})),d=Object(o.memo)((function(e){var t=e.expandedMenu,n=e.menus,o=e.parent,a=e.onMenuItemClick;return i.a.createElement("div",{key:"menu-container",className:o?"sub-menu-container":"menu-container"},n.map((function(e){return i.a.createElement(u,{key:e.route,menuConfig:e,parent:o,showSubMenu:e.displayName===t,onClick:a})})))})),p=(n(23),function(e){var t=e.menus,n=e.parent,a=Object(l.f)(),r=Object(o.useState)(""),s=Object(c.a)(r,2),u=s[0],p=s[1],h=Object(o.useCallback)((function(e){var t,o,i=null===e||void 0===e||null===(t=e.currentTarget)||void 0===t?void 0:t.getAttribute("data-menuname");if(u!==i){if(p(i||""),null===e||void 0===e||null===(o=e.currentTarget)||void 0===o?void 0:o.getAttribute("data-route")){var r=n?"/".concat(n.route,"/"):"/",s=e.currentTarget.getAttribute("data-route")||"",l="".concat(r).concat(s);a.push(l)}}else p("")}),[u,p]);return i.a.createElement(d,{menus:t,onMenuItemClick:h,expandedMenu:u,parent:n})}),h=function(){return i.a.createElement("section",null,i.a.createElement("h1",null,"Algorithm Overview"))},m=(n(29),[{displayName:"Algorithms",route:"interview-prep/algorithms",subMenu:[{displayName:"Graph",route:"graph"},{displayName:"Sorting",route:"sorting"},{displayName:"Binary Search",route:"binary-search"}]},{displayName:"Data structures",route:"interview-prep/data-structures",subMenu:[{displayName:"Priority Queue",route:"priority-queue"},{displayName:"Linked List",route:"linked-list"},{displayName:"Hash Table",route:"hash-table"},{displayName:"Map",route:"map"}]},{displayName:"Async JS",route:"interview-prep/async-js",subMenu:[{displayName:"Basics",route:"basics"},{displayName:"Rx JS",route:"rx-js"}]},{displayName:"JS Fundamentals",route:"interview-prep/js-fundamentals",subMenu:[{displayName:"Event loop",route:"event-loop"}]},{displayName:"Web Basics",route:"interview-prep/web-fundamentals",subMenu:[{displayName:"Event loop",route:"event-loop"}]},{displayName:"Effective Java",route:"interview-prep/effective-java",subMenu:[{displayName:"Exceptions",route:"exceptions"}]},{displayName:"TypeScript",route:"interview-prep/typescript",subMenu:[{displayName:"Overview",route:"overview"},{displayName:"Latest TypeScript Features",route:"latest-typescript-features"},{displayName:"App vs. Library Concerns",route:"app-vs-library-concerns"},{displayName:"Create Project from Scratch",route:"create-project-from-scratch"},{displayName:"Declaration files",route:"declaration-files"}]}]),g=n(2),y=function(e){var t=e.children,n=e.description,a=e.title,r=Object(o.useState)(!1),s=Object(c.a)(r,2),l=s[0],u=s[1],d=Object(o.useCallback)((function(){u(!l)}),[l]);return i.a.createElement("div",null,i.a.createElement("div",{onClick:d,style:{backgroundColor:"#EEEEEE",padding:l?"1.5rem 2rem 0 2rem":"1.5rem 2rem",cursor:"pointer"}},i.a.createElement("div",{style:{display:"inline-block",paddingRight:"1rem",verticalAlign:"middle",fontSize:"20px"}},l?"-":"+"),i.a.createElement("div",{style:{display:"inline-block",verticalAlign:"middle"}},i.a.createElement("div",{style:{fontSize:"25px"}},a),n&&i.a.createElement("div",{style:{fontSize:"16px",marginTop:"1rem"}},n))),l&&i.a.createElement("div",{style:{backgroundColor:"#EEEEEE"}},t))},f=n(30),b=function(){return i.a.createElement("article",null,i.a.createElement(y,{description:"Callback-based vs. promise-based vs. observable-based asynchronous JS",title:"Thinking Reactively"},i.a.createElement("div",{style:{padding:"1rem 2rem"}},i.a.createElement(g.a,null,f))))},v=function(){return i.a.createElement("article",null,i.a.createElement(b,null))},w=n(31),x=function(){return i.a.createElement("article",null,i.a.createElement(y,{description:"Use checked exceptions for recoverable conditions and runtime exceptionsfor programming errors",title:"Checked Exceptions vs. Unchecked Exceptions"},i.a.createElement("div",{style:{padding:"1rem 2rem"}},i.a.createElement(g.a,null,w))))},E=n(32),k=function(){return i.a.createElement("article",null,i.a.createElement(y,{description:"Use exceptions only for exceptional conditions",title:"When to use exceptions"},i.a.createElement("div",{style:{padding:"1rem 2rem"}},i.a.createElement(g.a,null,E))))},q=function(){return i.a.createElement("article",{style:{display:"grid",rowGap:"1.5rem"}},i.a.createElement(k,null),i.a.createElement(x,null))},S=n(33),T=function(){return i.a.createElement("article",null,i.a.createElement("div",{style:{padding:"1rem 2rem"}},i.a.createElement(g.a,null,S)))},I=n(34),N=function(){return i.a.createElement("article",null,i.a.createElement("div",{style:{padding:"1rem 2rem"}},i.a.createElement(g.a,null,I)))},j=n(35),A=function(){return i.a.createElement("article",null,i.a.createElement("div",{style:{padding:"1rem 2rem"}},i.a.createElement(g.a,null,j)))},J=n(36),C=function(){return i.a.createElement("article",null,i.a.createElement("div",{style:{padding:"1rem 2rem"}},i.a.createElement(g.a,null,J)))},O=n(37),M=function(){return i.a.createElement("article",null,i.a.createElement("div",{style:{padding:"1rem 2rem"}},i.a.createElement(g.a,null,O)))},P=n(38),W=function(){return i.a.createElement("article",null,i.a.createElement("div",{style:{padding:"1rem 2rem"}},i.a.createElement(g.a,null,P)))};var R=function(){return i.a.createElement(s.a,null,i.a.createElement("div",{className:"app"},i.a.createElement(p,{menus:m}),i.a.createElement("div",{className:"markdown-container"},i.a.createElement(l.c,null,i.a.createElement(l.a,{exact:!0,path:"/interview-prep/algorithms",component:h}),i.a.createElement(l.a,{exact:!0,path:"/interview-prep/async-js/rx-js",component:v}),i.a.createElement(l.a,{exact:!0,path:"/interview-prep/effective-java/exceptions",component:q}),i.a.createElement(l.a,{exact:!0,path:"/interview-prep/typescript",component:N}),i.a.createElement(l.a,{exact:!0,path:"/interview-prep/typescript/overview",component:N}),i.a.createElement(l.a,{exact:!0,path:"/interview-prep/typescript/latest-typescript-features",component:A}),i.a.createElement(l.a,{exact:!0,path:"/interview-prep/typescript/app-vs-library-concerns",component:C}),i.a.createElement(l.a,{exact:!0,path:"/interview-prep/typescript/create-project-from-scratch",component:M}),i.a.createElement(l.a,{exact:!0,path:"/interview-prep/typescript/declaration-files",component:W}),i.a.createElement(l.a,{exact:!0,path:"/interview-prep/js-fundamentals/event-loop",component:T})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.3bdb363c.chunk.js.map