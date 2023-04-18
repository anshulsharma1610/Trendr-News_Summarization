import React from 'react';
import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
import { styled, useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';

const pieOptions = {
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
};

const OrdersPieChart = (props) => {
    console.log('===', props)
    const theme = useTheme();

    const { primary, secondary } = theme.palette.text;
    const line = theme.palette.divider;

    const warning = theme.palette.warning.main;
    const primaryMain = theme.palette.primary.main;
    const successDark = theme.palette.success.dark;

    const [series] = useState([44, 55, 41, 17, 15]);

    const [options, setOptions] = useState(pieOptions);

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
            <ReactApexChart options={options} series={series} type="donut" />
        </div>
    );
}

OrdersPieChart.propTypes = {

};

export default OrdersPieChart;