import dynamic from 'next/dynamic'
import * as C from '@chakra-ui/react'
import { ApexOptions } from 'apexcharts';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: C.theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: C.theme.colors.gray[600]
    },
    axisTicks: {
      color: C.theme.colors.gray[600]
    },
    categories: [
      '2022-03-03:00:00:00.000Z',
      '2022-03-04:00:00:00.000Z',
      '2022-03-05:00:00:00.000Z',
      '2022-03-06:00:00:00.000Z',
      '2022-03-07:00:00:00.000Z',
      '2022-03-08:00:00:00.000Z',
      '2022-03-09:00:00:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}

const series = [{
  name: 'series1',
  data: [31, 120, 10, 28, 61, 18, 109]
}]

export default function Dashboard() {
  return (
    <C.Flex direction="column" h="100vh">
      <Header />

      <C.Flex
        px="6"
        my="6"
        w="100%"
        mx="auto"
        maxWidth={1480}
      >
        <Sidebar />

        <C.SimpleGrid flex="1" gap="4" minChildWidth="320px">
          <C.Box p="8" bg="gray.800" borderRadius={8} pb="4">
            <C.Text fontSize="lg" mb="4">Inscritos da semana</C.Text>
            <Chart
              type="area"
              height={160}
              series={series}
              options={options}
            />
          </C.Box>

          <C.Box p="8" bg="gray.800" borderRadius={8}>
            <C.Text fontSize="lg" mb="4">Taxa de abertura</C.Text>
            <Chart
              type="area"
              height={160}
              series={series}
              options={options}
            />
          </C.Box>
        </C.SimpleGrid>
      </C.Flex>
    </C.Flex>
  )
}