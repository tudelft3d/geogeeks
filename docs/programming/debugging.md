# Debugging

!!! info "What is a "bug"?"
    In programming we call a "bug" any kind of issue occuring in our code that obstructs us from getting the result we are after. For example this could be an error message or your program crashing or an incorrect result.

    **Fun fact**: Did you know? Bugs owe their name to a historical computer that ran into issues, because a moth had crawled into it!

Every programmer, no matter how experienced, runs into bugs with the code they write. Debugging is everything related to finding and fixing these problems. This page gives you some different debugging strategies to help you solve these bugs.

!!! example "Challenge"
    **Can you find the bug in this Python example?**
    ```py
    csv_path = "/Documents/salaries.csv"

    with open(csv_path, "r") as f:
        csv_lines = f.readlines()

    row_idx = 0
    total = 0
    for row in csv_lines:
        # Skip the header row
        if row_idx == 0:
            continue

        name, salary = row.split(',')

        total += int(salary)
        row_idx += 1

    print("Total: ", total)
    ```
Did you find it? If yes, you might have noticed that "Total: 0" is the printed answer. These kind of bugs can happen any time and can be difficult to spot,
especially when your code becomes more complex than this simple example.
??? success "Answer"
    The code uses the variable `row_idx` to keep track of which row the loop is at. It
    uses this index to skip the header row (the row with index 0). However, when it skips
    the header, it does not increment the `row_idx`. This means the `row_idx` always stays
    zero, so every row of the csv file gets skipped by the `continue` statement.

## Debugging strategies
### 1. Rubber duck debugging
Sometimes just going through your code line by line can help you find the solution. You can use the
rubber duck debugging method for this:
>   1. Beg, borrow, steal, buy, fabricate or otherwise obtain a rubber duck (bathtub variety).
>   2. Place rubber duck on desk and inform it you are just going to go over some code with it, if that’s all right.
>   3. Explain to the duck what your code is supposed to do, and then go into detail and explain your code line by line.
>   4. At some point you will tell the duck what you are doing next and then realise that that is not in fact what you are actually doing. The duck will sit there serenely, happy in the knowledge that it has helped you on your way.
>
>   Note: In a pinch a coworker might be able to substitute for the duck, however, it is often preferred to confide mistakes to the duck instead of your coworker.

From [rubberduckdebugging.com](https://rubberduckdebugging.com)

In our original example this might look something like:

- "*I load the csv file. The filepath is correct, I checked. The file has multiple lines so
the total should be higher than 0.*"
- "*Then I make the `row_idx` and `total` variables and set them both to zero. I will use these to
keep track of the active line in the loop and the total sum of the salary.*"
- "*Then I loop through the rows of the csv file.*"
- "*Because the first row has the headers, I can't use them for the total. The index of the
first row is zero, so I skip it with `continue`.*"
- "*Ohhhhh, I forgot to update the `row_idx` when I skip the header!*"

### 2. Print debugging
Another method of debugging is to add print statements in your code to see what might be happening.
If we do this in our original example, we get:

```py hl_lines="6 7 12 15 19 21"
csv_path = "/Documents/salaries.csv"

with open(csv_path, "r") as f:
    csv_lines = f.readlines()

print("CSV file opened")
print("File line count:", len(csv_lines))

row_idx = 0
total = 0
for row in csv_lines:
    print("Processing row:", row)
    # Skip the header row
    if row_idx == 0:
        print("Skipping row")
        continue

    name, salary = row.split(',')
    print("Adding salary:", salary)
    total += int(salary)
    print("New total is:", total)
    row_idx += 1

print("Total: ", total)
```

<br/>
This will print:

```
CSV file opened
File line count: 3
Processing row: name,salary
Skipping row
Processing row: john,1200
Skipping row
Processing row: jack,1400
Skipping row
Total:  0
```
Now we can immediately see what is happening. All rows get correctly loaded, but every row
gets skipped. Using this information, we can figure out the bug.

### 3. Debugging using a debugger
The most powerful method of debugging is to use debugger software. Sometimes the issues
you face can become so complex that simple print statements won't give you enough information.

Using a debugger, you can pause the execution of your code and see the values of all the variables.
Then, you can use the tools of the debugger to walk step by step through the lines of your code,
and see how the variables change. A debugger will also pause the execution of your code
when an error occurs, so you can see the values of all the variables at the moment of the error.

!!! video "Pycharm debugger tutorial"
    <span class="tag intermediate-tag">⭐️ Intermediate</span> Basis Pycharm debugging tutorial

    <div style="display: flex; justify-content: center; padding-bottom: 1em;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/nx5cKfM6sUk?si=81ndI_T9P0xTqUYv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    **Why watch this?** If you're using Python and Pycharm, and want to know how to get started using the debugger.

    <span class="tag advanced-tag">⭐️ Advanced</span> Advanced debugging tutorial
    <div style="display: flex; justify-content: center; padding-bottom: 1em;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/k6j1NkVAsuU?si=f1hnzXE0odLwCemU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    **Why watch this?** If you're using Python and Pycharm a lot, and you want to know every single
    possibility of the Pycharm debugger.




%% TODO
- Cpp specific (Clion)
- Mention CLI debuggers
- Debugging basics (step over, step in)
- Debugging exercises
