---
name: Code Review
about: Code Review task to perform on the repository
title: ""
labels: documentation
assignees: ""
---

# Description

This issue is to perform a code review on the x (file/module/component). At the end of this review, code documentation should be enhanced and the developer should provide commentary through a pull request.

# Criteria

Perform a thorough review of the content in question. If you have questions about the purpose of it that you cannot figure out easily, check with the original developer. If the original developer is not on the team or you cannot reach them, leave a comment on the issue to discuss.

The purpose of this review is to:

1. Read through the file/module and understand it fully, and comment questions/concerns onto this issue.
2. Add a simple description in comments to the top of the file, saying the purpose of the file in a few sentences.
3. Identify any possible security risks/issues within the module. Note any major concerns at the top, below the description, and put a suggested fix in a TODO tag near the issue.
4. Identify any components that should be updated, improved, or changed. Note improvements under TODO tags
5. If complicated or confusing functions exist within the module and needed clarification to understand, add a short comment above the function to explain it

# Pull Request

Open the code review in a PR `Code Review: xyz`. Commits should only do the code review, and not change elements of the code. Those can be identified and changed with a later fix.

Write "Fixes Issue #x" within the Pull Request, so it will close automatically and link in the issue with any discussion.

Note any major concerns with the file inside the pull request, so issues can be filed for future improvements.

# Merging

PR Reviewer should be able to verify the report, and understand the file fully from the description. If the description doesn't accurately explain what the file does, then it should be made clear for the comments.

If everything looks good, merge this change into the repository.
