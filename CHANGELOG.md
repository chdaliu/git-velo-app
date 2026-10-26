# Changelog

Release history for GitVelo. The source repository is private, so this
public copy keeps every version's changes available. Releases before
this file was introduced remain on the Releases page.

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

