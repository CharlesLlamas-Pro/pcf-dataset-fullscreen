import * as React from 'react';
import { CommandBar, ICommandBarItemProps } from '@fluentui/react/lib/CommandBar';

export interface IComponentProps {
    onFullScreen: () => void,
    isFullScreen: boolean
}

export function Component(props: IComponentProps) {

    const farItems: ICommandBarItemProps[] = [
        {
            key: 'fullscreen',
            text: 'Full Screen Mode',
            ariaLabel: 'Full Screen Mode',
            iconOnly: true,
            iconProps: { iconName: 'ChromeFullScreen' },
            onClick: () => props.onFullScreen(),
            disabled: props.isFullScreen
        },
    ];

    const items: ICommandBarItemProps[] = [
        {
            key: 'share',
            text: 'Share',
            iconProps: { iconName: 'Share' },
            onClick: () => console.log('Share'),
        },
        {
            key: 'download',
            text: 'Download',
            iconProps: { iconName: 'Download' },
            onClick: () => console.log('Download'),
        },
    ];


    return (
        <div>
            <CommandBar
                farItems={farItems}
                items={items}
            />
            <div>
                <label>Your grid control</label>
            </div>
        </div>
    );
}

