import { Helmet } from 'react-helmet-async';
import ContentHeader from 'src/components/content-header';
import { CONFIG } from 'src/global-config';

import DataContent from './DataContent';

import Header from './Header.jsx';

const metadata = { title: `位置管理 | 首页 - ${CONFIG.appName}` };
const InspectionMgmt = () => {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ContentHeader
        title="检项管理"
        icon="Microscope"
        customStyle={{ size: 28, strokeWidth: 2, color: '#3b82f6', fontColor: 'text-blue-500' }}
      />

      <Header />

      <DataContent />
    </>
  );
};

export default InspectionMgmt;
