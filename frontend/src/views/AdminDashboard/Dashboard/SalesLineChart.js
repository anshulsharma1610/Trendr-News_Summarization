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
    console.log('-------', props)
    const theme = useTheme();

    const { primary, secondary } = theme.palette.text;
    const line = theme.palette.divider;

    const warning = theme.palette.warning.main;
    const primaryMain = theme.palette.primary.main;
    const successDark = theme.palette.success.dark;

    const [series, setSeries] = useState([
        {
            name: "Sales",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        }
    ]);

    const [options, setOptions] = useState(lineOptions);

    useEffect(() => {
        const salesByMonth = Array(12).fill(0);

        props.data.forEach(({ month, year, totalSales }) => {
            // Convert month and year to an index in the salesByMonth array
            const index = (year - 2022) * 12 + (month - 1);

            salesByMonth[index] = totalSales;
        });

        setSeries([
            {
                name: "Sales",
                data: salesByMonth,
            }
        ]);

        setOptions((prevState) => ({
            ...prevState,
            options: {
                chart: {
                    ...prevState.chart,
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: true
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Sales Trends by Month',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                }
            },
        }));
    }, [props.data, primary, secondary, line, warning, primaryMain, successDark]);

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="line" height={350} />
        </div>
    );
}

SalesLineChart.propTypes = {

};


export default SalesLineChart;