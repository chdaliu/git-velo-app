# GitVeloApp

[中文](#中文) · [English](#english)

---

## 中文

**GitVelo 的官方发布仓库 —— 只发布安装包，不托管源代码。**

这里提供 GitVelo 各平台的已构建版本、安装包、校验和与发布说明。GitVelo 是一款跨平台 Git 图形管理工具。

- 📦 **下载**：前往 [chdaliu/git-velo-app Releases](https://github.com/chdaliu/git-velo-app/releases) 获取最新版本
- 📝 **发布说明**：每个版本的更新内容见对应 Release

> 本仓库不包含应用源代码、构建脚本或开发文档，也不接受代码类 Pull Request。功能建议与缺陷反馈请在本仓库提交 Issue。

### 下载

在 [Releases](https://github.com/chdaliu/git-velo-app/releases) 页面选择对应平台的文件：

| 平台 | 架构 | 安装包 |
| --- | --- | --- |
| macOS | Apple Silicon (arm64) | `.dmg` |
| macOS | Intel (amd64) | `.dmg` |
| Windows | x64 | `.exe` 安装程序 / `.msix` |
| Linux | amd64 | `.AppImage` / `.deb` / `.rpm` |
| Linux | arm64 | `.AppImage` / `.deb` / `.rpm` |

每个 Release 同时提供 `SHA256SUMS` 校验文件。若某个平台暂时缺失，说明该版本尚未覆盖该平台。

### 安装

**macOS**

1. 下载并打开 `.dmg`。
2. 将 GitVelo 拖入「应用程序」文件夹。
3. 首次启动若被系统拦截，请在「系统设置 → 隐私与安全性」中允许，或右键应用选择「打开」。

**Windows**

1. 下载并运行 `.exe` 安装程序，按提示完成安装。
2. 使用 `.msix` 时，双击后点击「安装」即可。
3. 若出现 SmartScreen 提示，确认文件来自本仓库后选择「更多信息 → 仍要运行」。

**Linux**

```bash
# AppImage
chmod +x GitVelo-*.AppImage
./GitVelo-*.AppImage

# Debian / Ubuntu
sudo apt install ./GitVelo-*.deb

# Fedora / RHEL
sudo rpm -i GitVelo-*.rpm
```

### 校验下载

建议安装前校验文件完整性：

```bash
# macOS / Linux
shasum -a 256 -c SHA256SUMS

# Windows (PowerShell)
Get-FileHash .\GitVelo-*.exe -Algorithm SHA256
```

将输出与 Release 中的 `SHA256SUMS` 对比即可。

### 版本说明

- 版本号遵循 [语义化版本](https://semver.org/lang/zh-CN/)：`主版本.次版本.修订号`。
- 标记为 **Pre-release** 的版本为测试版，可能不稳定，不建议日常使用。
- 升级时直接安装新版本覆盖旧版本，配置与仓库数据会保留。

### 反馈

- 缺陷、功能建议与安装包问题：请在本仓库提交 Issue，并注明版本号与平台。

---

## English

**The official release repository for GitVelo — binaries only, no source code.**

This repository hosts prebuilt versions, installers, checksums and release notes for GitVelo, a cross-platform Git GUI.

- 📦 **Download**: grab the latest version from [chdaliu/git-velo-app Releases](https://github.com/chdaliu/git-velo-app/releases)
- 📝 **Release notes**: see the Release entry for each version

> This repository contains no application source code, build scripts or developer docs, and does not accept code pull requests. Please report bugs and feature requests via the issues in this repository.

### Downloads

Pick the file for your platform on the [Releases](https://github.com/chdaliu/git-velo-app/releases) page:

| Platform | Architecture | Package |
| --- | --- | --- |
| macOS | Apple Silicon (arm64) | `.dmg` |
| macOS | Intel (amd64) | `.dmg` |
| Windows | x64 | `.exe` installer / `.msix` |
| Linux | amd64 | `.AppImage` / `.deb` / `.rpm` |
| Linux | arm64 | `.AppImage` / `.deb` / `.rpm` |

Every release also ships a `SHA256SUMS` file. If a platform is missing, that release does not cover it yet.

### Installation

**macOS**

1. Download and open the `.dmg`.
2. Drag GitVelo into the Applications folder.
3. If macOS blocks the first launch, allow it under System Settings → Privacy & Security, or right-click the app and choose Open.

**Windows**

1. Download and run the `.exe` installer, then follow the prompts.
2. For `.msix`, double-click and choose Install.
3. If SmartScreen appears, verify the file came from this repository, then choose More info → Run anyway.

**Linux**

```bash
# AppImage
chmod +x GitVelo-*.AppImage
./GitVelo-*.AppImage

# Debian / Ubuntu
sudo apt install ./GitVelo-*.deb

# Fedora / RHEL
sudo rpm -i GitVelo-*.rpm
```

### Verify Downloads

Checking file integrity before installing is recommended:

```bash
# macOS / Linux
shasum -a 256 -c SHA256SUMS

# Windows (PowerShell)
Get-FileHash .\GitVelo-*.exe -Algorithm SHA256
```

Compare the output with the `SHA256SUMS` file in the release.

### Versioning

- Versions follow [Semantic Versioning](https://semver.org/): `major.minor.patch`.
- Releases marked **Pre-release** are test builds and may be unstable; they are not recommended for daily use.
- To upgrade, install the new version over the old one — settings and repository data are preserved.

### Feedback

- Bugs, feature requests and release problems (corrupted installers, failed downloads, etc.): open an issue in this repository with the version and platform.
