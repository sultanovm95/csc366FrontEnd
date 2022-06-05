import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

import { getUser } from '../../utils';

export const Post = () => {
    const theme = useTheme();

    const [userId, setUserId] = useState(null);

    useEffect(() => {
        getUser().then((user) => {
            setUserId(user._id);
        });
    }, []);

    return (
        <Card sx={{ display: 'flex', marginTop: 2 }}>
            <Box
                sx={{ display: 'flex', width: '70%', flexDirection: 'column' }}
            >
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                        Open-source & Javascript Software engineering
                        apprenticeship pattern
                    </Typography>
                    <Typography
                        style={{ marginTop: 10 }}
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                    >
                        This was the last week of the “open-source” phase where
                        I contributed mainly to two different projects. In
                        addition to open-source projects contributions, I took a
                        time to dive deep in javascript topics that is the
                        programming language that I most love work with.
                    </Typography>
                </CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        pl: 1,
                        pb: 0
                    }}
                >
                    <IconButton aria-label="tags">
                        <Chip
                            avatar={
                                <Avatar
                                    alt="Natacha"
                                    src="https://avatars.dicebear.com/api/human/seed.svg"
                                />
                            }
                            label="Sultanov M"
                            variant="outlined"
                        />
                    </IconButton>
                    <Chip label="Computer" variant="outlined" />
                    <Divider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                        style={{ margin: 10 }}
                    />
                    <Chip label="16 May 2022" />
                    {userId ? (
                        <>
                            <Divider
                                orientation="vertical"
                                variant="middle"
                                flexItem
                                style={{ margin: 10 }}
                            />

                            <BookmarkAddOutlinedIcon />
                            <Divider
                                orientation="vertical"
                                variant="middle"
                                flexItem
                                style={{ margin: 10 }}
                            />
                            <IconButton>
                                <FavoriteBorderRoundedIcon />
                            </IconButton>
                        </>
                    ) : null}
                </Box>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: '40%', height: 150, padding: 5 }}
                image="https://miro.medium.com/max/1400/1*6ogDjsWeBIEngjRO7UHMrw.jpeg"
                alt="Live from space album cover"
            />
        </Card>
    );
};
