# angular-module2-solution

2nd assignment: a "check off" shopping List application.

Think of being in a store with a shopping list that allows you to "check off" the items you've already bought, except instead of checking them off, the bought item simply moves to the "Already Bought" list.

The "To Buy" list should be pre-populated with a list of at least 5 items. (*Hint: Use an array of object literals, where each item will be similar to `{ name: "cookies", quantity: 10 }`*) Each shopping list item is to have a name and quantity. It should be displayed to the user in the format of `Buy item_quantity item_name`. For example, shopping list item `{ name: "cookies", quantity: 10 }` would be listed as `Buy 10 cookies`.

Next to each item in the list should be a button with the label "Bought". When the user clicks on the "Bought" button, its associated item should be removed from the "To Buy" list and appear in the "Already Bought" list.
