---
to: src/components/<%= hierarchy%>/<%= h.changeCase.upperCaseFirst(fileName) %>/index.ts
---
export {default} from "./<%= h.changeCase.upperCaseFirst(fileName) %>"
export * from "./<%= h.changeCase.upperCaseFirst(fileName) %>"
