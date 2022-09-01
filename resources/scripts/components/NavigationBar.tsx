import * as React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faLayerGroup, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useStoreState } from 'easy-peasy';
import { ApplicationStore } from '@/state';
import SearchContainer from '@/components/dashboard/search/SearchContainer';
import tw, { theme } from 'twin.macro';
import styled from 'styled-components/macro';
import http from '@/api/http';
import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
import Tooltip from '@/components/elements/tooltip/Tooltip';
import Avatar from '@/components/Avatar';

const RightNavigation = styled.div`
    & > a,
    & > button,
    & > .navigation-link {
        ${tw`flex items-center h-full no-underline text-neutral-300 px-6 cursor-pointer transition-all duration-150`};

        &:active {
            ${tw`bg-primary-500/10`}
        }
        &:hover {
            ${tw`text-black bg-primary-500`};
        }

        &:active,
        &:hover,
        &.active {
            box-shadow: inset 0 -2px ${theme`colors.primary`.toString()};
        }
    }
`;

export default () => {
    // const name = useStoreState((state: ApplicationStore) => state.settings.data!.name);
    const rootAdmin = useStoreState((state: ApplicationStore) => state.user.data!.rootAdmin);
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const onTriggerLogout = () => {
        setIsLoggingOut(true);
        http.post('/auth/logout').finally(() => {
            // @ts-expect-error this is valid
            window.location = '/';
        });
    };

    return (
        <div className={'w-full bg-neutral-800 shadow-md overflow-x-auto z-30'}>
            <SpinnerOverlay visible={isLoggingOut} />
            <div className={'mx-auto w-full grid grid-cols-header items-center h-[3.5rem] max-w-[1200px]'}>
                <div id={'logo'}>
                    <Link to={'/'} className={'text-2xl grid font-header px-4 no-underline text-primary'}>
                        <svg
                            className={'w-auto h-6 text-inherit fill-current'}
                            version='1.0'
                            xmlns='http://www.w3.org/2000/svg'
                            width='1500.000000pt'
                            height='255.000000pt'
                            viewBox='0 0 1500.000000 255.000000'
                            preserveAspectRatio='xMidYMid meet'
                        >
                            <g transform='translate(0.000000,255.000000) scale(0.100000,-0.100000)' stroke='none'>
                                <path d='M3140 1280 l0 -1030 880 0 880 0 0 1030 0 1030 -880 0 -880 0 0 -1030z m1290 0 l0 -570 -410 0 -410 0 0 570 0 570 410 0 410 0 0 -570z'></path>
                                <path d='M7170 2080 l0 -230 310 0 310 0 0 -800 0 -800 255 0 255 0 0 800 0 800 300 0 300 0 0 230 0 230 -865 0 -865 0 0 -230z'></path>
                                <path d='M9070 2080 l0 -230 160 0 c88 0 160 -4 160 -8 0 -4 -61 -185 -135 -401 l-135 -394 0 -398 0 -399 235 0 235 0 0 175 0 175 305 0 305 0 0 -175 0 -175 230 0 230 0 0 1030 0 1030 -795 0 -795 0 0 -230z m1130 -625 l0 -395 -290 0 c-159 0 -290 3 -290 8 0 4 50 181 111 395 l112 387 179 0 178 0 0 -395z'></path>
                                <path d='M11000 1280 l0 -1030 235 0 235 0 0 620 c0 341 3 620 6 620 4 0 161 -88 350 -196 l344 -197 0 -423 0 -424 235 0 235 0 0 1030 0 1030 -235 0 -235 0 0 -320 c0 -176 -2 -320 -5 -320 -3 0 -160 88 -350 196 l-345 196 0 124 0 124 -235 0 -235 0 0 -1030z'></path>
                                <path d='M320 1275 l0 -1025 235 0 235 0 0 505 0 505 380 0 380 0 0 -505 0 -505 235 0 235 0 0 1025 0 1025 -235 0 -235 0 0 -290 0 -290 -380 0 -380 0 0 290 0 290 -235 0 -235 0 0 -1025z'></path>
                                <path d='M2340 2070 l0 -230 235 0 235 0 0 230 0 230 -235 0 -235 0 0 -230z'></path>
                                <path d='M5220 1275 l0 -1025 810 0 810 0 0 230 0 230 -575 0 -575 0 0 565 0 565 575 0 575 0 0 230 0 230 -810 0 -810 0 0 -1025z'></path>
                                <path d='M12960 1275 l0 -1025 810 0 810 0 0 230 0 230 -575 0 -575 0 0 155 0 155 523 0 524 0 102 618 c57 339 105 627 108 640 l5 22 -866 0 -866 0 0 -1025z m1160 553 c0 -7 -12 -88 -27 -180 l-26 -168 -319 0 -318 0 0 180 0 180 345 0 c269 0 345 -3 345 -12z'></path>
                                <path d='M2340 915 l0 -665 235 0 235 0 0 665 0 665 -235 0 -235 0 0 -665z'></path>
                            </g>
                        </svg>
                    </Link>
                </div>
                <RightNavigation className={'flex h-full items-center justify-end'}>
                    <SearchContainer />
                    <Tooltip placement={'bottom'} content={'Dashboard'}>
                        <NavLink to={'/'} exact>
                            <FontAwesomeIcon icon={faLayerGroup} />
                        </NavLink>
                    </Tooltip>
                    {rootAdmin && (
                        <Tooltip placement={'bottom'} content={'Admin'}>
                            <a href={'/admin'} rel={'noreferrer'}>
                                <FontAwesomeIcon icon={faCogs} />
                            </a>
                        </Tooltip>
                    )}
                    <Tooltip placement={'bottom'} content={'Account Settings'}>
                        <NavLink to={'/account'}>
                            <span className={'flex items-center w-5 h-5'}>
                                <Avatar.User />
                            </span>
                        </NavLink>
                    </Tooltip>
                    <Tooltip placement={'bottom'} content={'Sign Out'}>
                        <button onClick={onTriggerLogout}>
                            <FontAwesomeIcon icon={faSignOutAlt} />
                        </button>
                    </Tooltip>
                </RightNavigation>
            </div>
        </div>
    );
};
