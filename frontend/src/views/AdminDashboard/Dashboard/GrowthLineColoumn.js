import React from 'react';
import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
import { styled, useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';

const columnChartOptions = {
    options: {
        chart: {
            height: 350,
            type: 'line',
        },
        stroke: {
            width: [0, 4]
        },
        title: {
            text: 'Traffic Sources'
        },
        dataLabels: {
            enabled: true,
            enabledOnSeries: [1]
        },
        labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
        xaxis: {
            type: 'datetime'
        },
        yaxis: [{
            title: {
                text: 'Website Blog',
            },
        }, {
            opposite: true,
            title: {
                text: 'Sales'
            }
        },]
    },
};

const GrowthLineColoumn = (props) => {
    const theme = useTheme();

    const { primary, secondary } = theme.palette.text;
    const line = theme.palette.divider;

    const warning = theme.palette.warning.main;
    const primaryMain = theme.palette.primary.main;
    const successDark = theme.palette.success.dark;

    const [series] = useState([
        {
            name: 'Sales',
            type: 'column',
            data: [15, 24, 62, 45, 122, 80]
        }, {
            name: '% change',
            type: 'line',
            data: calculatePercentageGrowth([15, 24, 62, 45, 122, 80])
        },
    ]);

    // Function to calculate percentage growth based on sales data
    function calculatePercentageGrowth(salesData) {
        const percentageGrowth = [0];
        for (let i = 1; i < salesData.length; i++) {
            const growth = (((salesData[i] - salesData[i - 1]) / salesData[i - 1]) * 100).toFixed(2);
            percentageGrowth.push(growth);
        }
        return percentageGrowth;
    }

    const [options, setOptions] = useState(columnChartOptions);

    useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
        }));
    }, [primary, secondary, line, warning, primaryMain, successDark]);

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="line" height={350} />
        </div>
    );
}

GrowthLineColoumn.propTypes = {

};

export default GrowthLineColoumn;