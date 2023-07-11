import { ActionsIcon } from "../../atoms/icons/actions"
import { CodeReviewIcon } from "../../atoms/icons/code-review"
import { CodeSpacesIcon } from "../../atoms/icons/codespaces"
import { CopilotIcon } from "../../atoms/icons/copilot"
import { DiscussionsIcon } from "../../atoms/icons/discussions"
import { IssuesIcon } from "../../atoms/icons/issues"
import { PackagesIcon } from "../../atoms/icons/packages"
import { SecurityIcon } from "../../atoms/icons/security"

export const productDropdownData = {
  actions: {
    icon: ActionsIcon,
    title: "Actions",
    subtitle: "Automate any workflow",
  },
  packages: {
    icon: PackagesIcon,
    title: "Packages",
    subtitle: "Host and manage packages",
  },
  security: {
    icon: SecurityIcon,
    title: "Security",
    subtitle: "Find and fix vulnerabilities",
  },
  codespaces: {
    icon: CodeSpacesIcon,
    title: "Codespaces",
    subtitle: "Instant dev environments",
  },
  copilot: {
    icon: CopilotIcon,
    title: "Copilot",
    subtitle: "Write better code with AI",
  },
  codeReview: {
    icon: CodeReviewIcon,
    title: "Code Review",
    subtitle: "Manage code changes",
  },
  issues: {
    icon: IssuesIcon,
    title: "Issues",
    subtitle: "Plan and track work",
  },
  discussions: {
    icon: DiscussionsIcon,
    title: "Discussions",
    subtitle: "Collaborate outside of code",
  },
  list: ["All features", "Documentation", "GitHub Skills", "Blog"],
}

export const solutionsDropdownData = {
  for: ["Enterprise", "Teams", "Startups", "Startups Education"],
  bySolution: ["CI/CD & Automation", "DevOps", "DevSecOps"],
  caseStudies: ["Customer", "Stories", "Resources"],
}
