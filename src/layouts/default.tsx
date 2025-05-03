
import React, { FunctionComponent, PropsWithChildren, ReactElement } from "react";
import '../styles/globals.css'

/**
 * Decoded ID Token Response component Prop types interface.
 */
interface DefaultLayoutPropsInterface {

    /**
     * Are the Authentication requests loading.
     */
    isLoading?: boolean;
    /**
     * Are there authentication errors.
     */
    hasErrors?: boolean;
}

/**
 * Default layout containing Header and Footer with support for children nodes.
 *
 * @param {DefaultLayoutPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const DefaultLayout: FunctionComponent<PropsWithChildren<DefaultLayoutPropsInterface>> = (
    props: PropsWithChildren<DefaultLayoutPropsInterface>
): ReactElement => {

    const {
        children,
        isLoading,
        hasErrors
    } = props;

    return (
        <>
            <div className="container">
                <div className="header-title">
                    <h1>
                        Project Snake Account Service
                    </h1>
                </div>
                {
                    isLoading
                        ? <div className="content">Loading ...</div>
                        : hasErrors
                            ? <div className="content">An error occured while authenticating ...</div>
                            : children
                }
            </div>
        </>
    );
};
