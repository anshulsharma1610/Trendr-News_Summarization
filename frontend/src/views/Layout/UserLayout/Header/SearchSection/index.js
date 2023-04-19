import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Hidden from '@mui/material/Hidden';
import { useTheme, styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const SearchSection = () => {
    const [showSearchBar, setShowSearchBar] = useState(false);
    const theme = useTheme();

    // State to store the selected categories and keywords
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [keywords, setKeywords] = useState('');

    // State to store the fetched news articles
    const [news, setNews] = useState([]);

    // State to store the fetched categories
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate(); // Get the navigate function
    const isLoggedIn = useSelector((state) => {
        return state.user.isLoggedIn;
    });
    let userId
    if (isLoggedIn) {
        userId = useSelector((state) => state.user.user.user._id);
    }
    // Fetch categories on component mount
    useEffect(() => {
        axios.get('http://localhost:8000/api/preferences')
            .then((response) => {
                setCategories(response.data.map((category) => `Category: ${category.prefernceName}`));
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    // Handle search
    const handleSearch = () => {
        const theme = useTheme();
        // Filter out the "Category: " prefix from selected categories
        const selectedCategoriesCleaned = selectedCategories.map((category) => category.replace('Category: ', '').toLowerCase());

        axios.get('http://localhost:8000/api/news/search', {
            params: {
                userId: userId,
                categories: selectedCategoriesCleaned.join(','),
                keywords: keywords
            }
        })
            .then((response) => {
                setNews(response.data);
                navigate('/search', { state: response.data });
                // Clear the selectedCategories and keywords states
                setSelectedCategories([]);
                setKeywords('');
            })
            .catch((error) => {
                console.error(error);
            });
    };

    // Handle "Enter" key press
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
            }}
        >
            <Hidden smUp>
                {showSearchBar ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '90%' }}>
                        <Autocomplete
                            multiple
                            options={categories || []}
                            value={selectedCategories}
                            onChange={(event, newValue) => {
                                setSelectedCategories(newValue);
                            }}
                            renderTags={(value, getTagProps) =>
                                value.map((option, index) => (
                                    <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                                ))
                            }
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="outlined"
                                    label="Search"
                                    placeholder="Categories & Keywords"
                                    onChange={(event) => setKeywords(event.target.value)}
                                    onKeyDown={handleKeyDown}
                                    fullWidth
                                    sx={{ minWidth: '180px' }}
                                />
                            )}
                        />
                        <IconButton onClick={() => setShowSearchBar(false)} sx={{
                            backgroundColor: '#ede7f6',
                            padding: '6px',
                            borderRadius: '50%',
                            marginLeft: '4px'
                        }}>
                            <CloseIcon sx={{ color: "#8667C4" }} />
                        </IconButton>
                    </Box>
                ) : (
                    <Box sx={{ alignSelf: 'flex-start', paddingLeft: '8px' }}>
                        <IconButton onClick={() => setShowSearchBar(true)} sx={{
                            backgroundColor: '#EDE7F6',
                            padding: '6px',
                            borderRadius: '50%',
                        }}>
                            <SearchIcon sx={{ color: "#8667C4" }} />
                        </IconButton>
                    </Box>
                )}
            </Hidden>
            <Hidden smDown>
                <Autocomplete
                    multiple
                    color={theme.palette.primary.light}
                    options={categories}
                    value={selectedCategories}
                    onChange={(event, newValue) => {
                        setSelectedCategories(newValue);
                    }}
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (<Chip variant="outlined" label={option} {...getTagProps({ index })} />
                        ))
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="outlined"
                            // color={theme.palette.primary.light}
                            label="Search"
                            placeholder="Categories & Keywords"
                            onChange={(event) => setKeywords(event.target.value)}
                            onKeyDown={handleKeyDown}
                            sx={{
                                width: selectedCategories.length > 0 ? '90%' : '50%',
                                minWidth: '450px',
                                mr: 1,
                                ml: 1,
                                [theme.breakpoints.down('md')]: {
                                    width: '90%',
                                },
                            }}
                        />
                    )}
                />
            </Hidden>
        </Box>
    );
};

export default SearchSection;

