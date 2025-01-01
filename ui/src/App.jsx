import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from './query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routeConfig } from './route.config'


const router = createBrowserRouter(routeConfig, {
	future: {
		v7_normalizeFormMethod: true,
	},
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Rest of the Application */}
      <RouterProvider
        router={router}
      />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}