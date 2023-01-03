import { Color } from "@raycast/api";

export enum workspaceStatus {
  workspace_Inactive = "stopped",
  workspace_active = "running",
  workspace_progressing = "progressing",
  workspace_failed = "failed",
}

export enum workspaceClass {
  //   standard = "Standard",
  //   large =    "Large     "
  // standard = "  8GB, 4 Core",
  // large = "16GB, 8 Core"
  standard = "S",
  large = "L",
}

export enum desc {
  standard_workspace_desc = "Up to 4 vCPU, 8GB memory, 30GB disk",
  large_workspace_desc = "Up to 8 vCPU, 16GB memory, 50GB disk",
}

export enum UIColors {
  primary_dark = "#12100C",
  primary_light = "#f5f4f4",
  gitpod_gold = "#FFB45B",
  green = "#84cc18",
  grey = "#a8a29e",
  red = "#f77171",
}

export enum statusColors {
  running = "#84cc18",
  progressing = "#FFB45B",
  stopped = "#a8a29e",
  failed = "#f77171",
}

export const GitpodIcons = {
  tag_icon: {
    source: "Icons/tag.svg",
    tintColor: Color.Green
  },
  issues_icon: {
    source: "Icons/bug.svg",
    tintColor: UIColors.red
  },
  pulls_icon: {
    source: "Icons/git-pull-request.svg",
    tintColor: UIColors.gitpod_gold
  },
  running_icon: { source: "Icons/status_icon.png", tintColor: statusColors.running },
  stopped_icon: { source: "Icons/status_icon.png", tintColor: statusColors.stopped },
  failed_icon: { source: "Icons/status_icon.png", tintColor: statusColors.failed },
  progressing_icon: { source: "Icons/status_icon.png", tintColor: statusColors.progressing },
  running_icon_menubar: { source: "Icons/status_icon_small.png", tintColor: statusColors.running },
  stopped_icon_menubar: { source: "Icons/status_icon_small.png", tintColor: statusColors.stopped },
  failed_icon_menubar: { source: "Icons/status_icon_small.png", tintColor: statusColors.failed },
  progressing_icon_menubar: { source: "Icons/status_icon_small.png", tintColor: statusColors.progressing },

  branch_icon: {
    source: "Icons/merge.svg",
    tintColor: statusColors.running,
  },

  gitpod_logo_primary: { source: "logo-mark.png" },
  gitpod_logo_secondary: { source: "logo-mark.png", tintColor: statusColors.stopped },
};
