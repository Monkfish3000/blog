'use client';

import React from 'react';
import {
  AspectRatio,
  Card,
  CardContent,
  CardOverflow,
  Divider,
  Typography,
  CssVarsProvider,
} from '@mui/joy';
import Image from 'next/image';

import formatDate from '@/utils/formateDate';
import { theme } from '@/app/styles/joyUITheme';

interface PostCardProps {
  title: string;
  img: string;
  date: string;
  excerpt: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, img, date, excerpt }) => {
  return (
    <CssVarsProvider theme={theme}>
      <Card className="shadow-2xl" variant="outlined" sx={{ width: '100%' }}>
        <CardOverflow>
          <AspectRatio ratio="2">
            <Image
              layout="fill"
              objectFit="cover"
              src={img}
              alt="Blog post image"
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography
            sx={{ height: '60px' }}
            className="font-normal text-xl hover:text-customBlue"
          >
            {title}
          </Typography>
        </CardContent>
        <CardOverflow
          variant="soft"
          sx={{ overflow: 'hidden', bgcolor: 'black' }}
        >
          <Divider inset="context" />
          <CardContent orientation="horizontal">
            <Typography
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                height: '50px',
              }}
              className="text-xs"
              fontWeight="md"
              textColor="#fff"
            >
              {excerpt}
            </Typography>
            <Divider orientation="vertical" sx={{ bgcolor: '#fff' }} />
            <Typography level="body-xs" fontWeight="md" textColor="#fff">
              {formatDate(date)}
            </Typography>
          </CardContent>
        </CardOverflow>
      </Card>
    </CssVarsProvider>
  );
};

export default PostCard;
