# werstack

[схема веток](#git-branch)

Сервис по разработке сайтов и веб-приложений, с подключением систем управлениям контентом (cms), взаимодействием с клиентами (crm) и каталогами товаров (e-com).

# git branch
```mermaid
---
title: Example Git diagram
---
gitGraph
   commit id: "first commit"
   commit id: "feat"
   branch develop
   checkout develop
   commit id: "feat1"
   branch header
   checkout header
   commit id: "feat2"
   commit id: "fix1"
   checkout develop
   merge header
   commit id: "fix2"
   checkout main
   commit id: "hot fix"
   commit id: "deploy"
     
```
[о лендинге](/about_landing.md)