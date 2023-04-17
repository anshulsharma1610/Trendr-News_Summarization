import React from 'react';
import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
import { styled, useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';

const columnChartOptions = {
    chart: {
        height: 350,
        type: "line",
        stacked: false
    },
    dataLabels: {
        enabled: false
    },
    colors: ["#FF1654", "#247BA0"],
    series: [
        {
            name: "Series A",
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
        },
        {
            name: "Series B",
            data: [20, 29, 37, 36, 44, 45, 50, 58]
        }
    ],
    stroke: {
        width: [4, 4]
    },
    plotOptions: {
        bar: {
            columnWidth: "20%"
        }
    },
    xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
    },
    yaxis: [
        {
            axisTicks: {
                show: true
            },
            axisBorder: {
                show: true,
                color: "#FF1654"
            },
            labels: {
                style: {
                    colors: "#FF1654"
                }
            },
            title: {
                text: "Series A",
                style: {
                    color: "#FF1654"
                }
            }
        },
        {
            opposite: true,
            axisTicks: {
                show: true
            },
            axisBorder: {
                show: true,
                color: "#247BA0"
            },
            labels: {
                style: {
                    colors: "#247BA0"
                }
            },
            title: {
                text: "Series B",
                style: {
                    color: "#247BA0"
                }
            }
        }
    ],
    tooltip: {
        shared: false,
        intersect: true,
        x: {
            show: false
        }
    },
    legend: {
        horizontalAlign: "left",
        offsetX: 40
    }
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
            name: 'Net Profit',
            data: [180, 90, 135, 114, 120, 145]
        },
        {
            name: 'Revenue',
            data: [120, 45, 78, 150, 168, 99]
        }
    ]);

    const [options, setOptions] = useState(columnChartOptions);

    useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
            colors: [warning, primaryMain],
            xaxis: {
                labels: {
                    style: {
                        colors: [secondary, secondary, secondary, secondary, secondary, secondary]
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: [secondary]
                    }
                }
            },
            grid: {
                borderColor: line
            },
            tooltip: {
                theme: 'light'
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                labels: {
                    colors: 'grey.500'
                }
            }
        }));
    }, [primary, secondary, line, warning, primaryMain, successDark]);

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="bar" height={430} />
        </div>
    );
}

GrowthLineColoumn.propTypes = {

};

export default GrowthLineColoumn;