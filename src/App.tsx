import { HashRouter } from 'react-router-dom';
import PageLayout from './layout/PageLayout';
import AppRoutes from './routes';
import ErrorPage from './pages/ErrorPage';
import { useIssueData } from './hooks/useIssueData';
import LoadingComponent from './components/UI/Loading/LoadingComponent';

const App = () => {
  const { error, isError, loading } = useIssueData();

  return (
    <HashRouter>
      <PageLayout>
        {isError ? (
          <ErrorPage message={error?.message} code={error?.code} />
        ) : (
          <>
            {loading && <LoadingComponent />}
            <AppRoutes />
          </>
        )}
      </PageLayout>
    </HashRouter>
  );
};

export default App;
