# Changelog

Release history for GitVelo. The source repository is private, so this
public copy keeps every version's changes available. Releases before
this file was introduced remain on the Releases page.

## v0.7.0-beta.1 - 2026-10-27

### What's Changed

- docs(release): prepare v0.7.0-beta.1
- feat(workspace): split staged and unstaged change tabs
- feat(history): draw a first-parent chain for a selected branch
- fix(gitcore): preserve untracked files during pull and checkout

**Release:** https://github.com/chdaliu/git-velo-app/releases/tag/v0.7.0-beta.1

## v0.6.0 - 2026-10-26

### What's Changed

- feat(history): add day bands, date range filter and parent lanes
- fix(history,pull): include fetched history and preserve exclusions
- feat(settings): show settings inside the home tab
- fix(settings): move session validity into web service settings
- docs(release): publish only when explicitly requested

**Release:** https://github.com/chdaliu/git-velo-app/releases/tag/v0.6.0

## v0.6.0-beta.2 - 2026-10-26

### What's Changed

- feat(history): show branch scope and changed files in graph previews
- ci(release): bound Linux dependency installation

**Release:** https://github.com/chdaliu/git-velo-app/releases/tag/v0.6.0-beta.2

## v0.6.0-beta.1 - 2026-10-26

### What's Changed

- fix(history,web): restore graph entry, scope graph branches, require web password
- docs(release): default future releases to beta tags
- feat(repo): choose a git identity when initializing a repository

**Release:** https://github.com/chdaliu/git-velo-app/releases/tag/v0.6.0-beta.1

## v0.5.0 - 2026-10-26

### What's Changed

- fix(history): make ahead/behind counts accurate and refresh stale history
- fix(settings): make follow-system language a switch
- fix(history): put commit actions on their own row and add message copy
- fix(settings): tidy the web service account and start layout
- feat(history): add a full-width horizontal commit graph with node previews

**Release:** https://github.com/chdaliu/git-velo-app/releases/tag/v0.5.0

## v0.4.1 - 2026-10-26

### What's Changed

- fix(pull): fast-forward from the remote-tracking branch and repair bad refs

**Release:** https://github.com/chdaliu/git-velo-app/releases/tag/v0.4.1

## v0.4.0 - 2026-10-26

### What's Changed

- fix: close remaining history and editor state gaps
- fix: preserve form state and drafts across tab switches
- perf: reduce memory pressure from inactive tabs and status polling
- fix(settings): keep history page size input editable and default to 200
- feat(history): defer large commit diffs until requested
- feat(history): focus filtered file and scroll the repo subnav on mobile
- fix(settings): save generated web password but reveal it only briefly
- feat(home): fix project card height and middle-truncate labels
- fix(workspace): choose which side the changes list appears on
- fix(tabs): use fixed-width tabs and drag-follow reordering
- feat(history): route file history into the filtered history view
- fix(diff): prevent side-by-side text overlap in narrow panes
- fix(settings): retain the generated web password for the app session
- feat(history): filter the commit graph with the branch/search filters
- feat(diff): add a left/right change-position toggle to split view
- feat(exclude): support untracked files and bound large diff memory
- feat(settings): put web account setup before service controls
- feat(history): add a full commit graph view and simplify list markers
- feat(repo): auto-fetch opened projects and add local commit exclusions
- feat(i18n): follow the system language by default
- ci(release): mirror the changelog to the public release repository
- fix(ui): repair project pinning and unclutter diff header

**Release:** https://github.com/chdaliu/git-velo-app/releases/tag/v0.4.0

