module.exports = [
  {
    type: 'select',
    name: 'hierarchy',
    message: "What is the component's hierarchy?",
    choices: ['atoms', 'molecules', 'organisms', 'templates', 'pages']
  },
  {
    type: 'input',
    name: 'fileName',
    message: `What will be the component name?`
  }
];
