import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from './query'

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Rest of the Application */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}