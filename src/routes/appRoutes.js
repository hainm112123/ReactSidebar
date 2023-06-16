import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

import HomePage from "../pages/home/HomePage"
import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout"
import DefaultPage from "../pages/dashboard/DefaultPage"
import DashboardIndex from '../pages/dashboard/DashboardIndex';
import ComponentPageLayout from '../pages/components/ComponentPageLayout';
import ChangelogPage from '../pages/changelog/ChangelogPage';
import InstallationPage from '../pages/installation/InstallationPage';
import DocumentationPage from '../pages/documentation/DocumentationPage';

const appRoutes = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/installation",
    element: <InstallationPage />,
    state: "installation",
    sidebarProps: {
      displayText: "Installation",
      icon: <FileDownloadOutlinedIcon />
    }
  },
  {
    path: "/dashboard",
    element: <DashboardPageLayout />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "dashboard.index",
      },
      {
        path: "/dashboard/default",
        element: <DefaultPage />,
        state: "dashboard.default",
        sidebarProps: {
          displayText: "Default",
        }
      }
    ],
  },
  {
    path: "/components",
    element: <ComponentPageLayout />,
    state: "components",
    sidebarProps: {
      displayText: "Components",
      icon: <AppsOutlinedIcon />
    }
  },
  {
    path: "/documentation",
    element: <DocumentationPage />,
    state: "documentation",
    sidebarProps: {
      displayText: "Documentation",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    path: "/changelog",
    element: <ChangelogPage />,
    state: "changelog",
    sidebarProps: {
      displayText: "Changelog",
      icon: <ListOutlinedIcon />
    }
  }
]

export default appRoutes;