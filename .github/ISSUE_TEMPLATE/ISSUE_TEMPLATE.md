name: 🐛 Report an Issue / Suggest an Improvement
description: Report a bug, outdated info, or suggest improvements
title: "[Issue]: "
labels: [bug, suggestion]
assignees: ''

body:
  - type: markdown
    attributes:
      value: |
        Thank you for helping improve this project! 🙏
  - type: textarea
    id: description
    attributes:
      label: Describe the issue / suggestion
      description: What did you find outdated, incorrect, or could be improved?
      placeholder: Write here...
    validations:
      required: true

  - type: textarea
    id: source
    attributes:
      label: (Optional) Source link
      description: Do you have a source to back this up? (Official site / news / personal experience)
      placeholder: URL or description
    validations:
      required: false
