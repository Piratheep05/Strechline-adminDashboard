import React from 'react';
import Home from '../Pages/Home';
import HomeIcon from '@mui/icons-material/Home';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import RepeatIcon from '@mui/icons-material/Repeat';
import BuildIcon from '@mui/icons-material/Build';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ArticleIcon from '@mui/icons-material/Article';

const WasteManagementPage = React.lazy(() =>
  import('waste_management/WasteManagementPage')
);
const AlterationPage = React.lazy(() => import('alteration/AlterationPage'));
const MaintenancePage = React.lazy(() => import('maintenance/MaintenancePage'));

const ROUTES = [
  {
    id: 1,
    label: 'Home',
    path: '/home',
    main: true,
    component: <Home />,
    icon: <HomeIcon />,
    children: [],
  },
  {
    id: 2,
    label: 'Waste Management',
    path: '/waste-management',
    main: true,
    external: true,
    component: <WasteManagementPage />,
    icon: <DeleteSweepIcon />,
    children: [],
  },
  {
    id: 3,
    label: 'Alteration',
    path: '/alteration',
    main: true,
    external: true,
    component: <AlterationPage />,
    icon: <RepeatIcon />,
    children: [],
  },
  {
    id: 4,
    label: 'Maintenance',
    path: '/maintenance',
    main: true,
    external: true,
    component: <MaintenancePage />,
    icon: <BuildIcon />,
    children: [],
  },
  {
    id: 5,
    label: 'Beam changing',
    path: '/beam-changing',
    main: true,
    external: true,
    component: <></>,
    icon: <ElectricBoltIcon />,
    children: [],
  },
  {
    id: 6,
    label: 'Cleaning',
    path: '/cleaning',
    main: true,
    external: true,
    component: <></>,
    icon: <CleaningServicesIcon />,
    children: [],
  },
  {
    id: 7,
    label: 'Quality improvement',
    path: '/quality-improvement',
    main: true,
    external: true,
    component: <></>,
    icon: <WorkspacePremiumIcon />,
    children: [],
  },
  {
    id: 8,
    label: 'Preparation',
    path: '/preparation',
    main: true,
    external: true,
    component: <></>,
    icon: <ArticleIcon />,
    children: [],
  },
];

export default ROUTES;
