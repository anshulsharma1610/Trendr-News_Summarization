import React from 'react';
import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
import { styled, useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';

const lineOptions = {
    options: {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Product Trends by Month',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    },
};

const SalesLineChart = (props) => {
    const theme = useTheme();

    const { primary, secondary } = theme.palette.text;
    const line = theme.palette.divider;

    const warning = theme.palette.warning.main;
    const primaryMain = theme.palette.primary.main;
    const successDark = theme.palette.success.dark;

    const [series] = useState([{
        name: "Purchases",
        data: [15, 24, 62, 45, 122, 80]
    }]);

    const [options, setOptions] = useState(lineOptions);

    useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
            options: {
                chart: {
                    type: 'donut',
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
        }))
    }, [primary, secondary, line, warning, primaryMain, successDark]);

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="line" height={350} />
        </div>
    );
}

SalesLineChart.propTypes = {

};


export default SalesLineChart;