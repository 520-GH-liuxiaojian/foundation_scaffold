import React, { Suspense } from 'react'
import { Layout } from 'antd'
import { Route, Routes } from 'react-router-dom'

import styles from './index.module.scss'
import Error from '@components/Error'
import PageLoading from '@components/PageLoading'
import { menusWithRoute, routeMap, RouteMapValue } from './menu'
import Header from './Header'
import Sider from './Sider'

function Home() {
    return (
        <Layout>
            <Sider />
            <Layout>
                <Header />
                <Layout.Content className={styles.content}>
                    <Suspense fallback={<PageLoading />}>
                        <Routes>
                            {menusWithRoute.map(m => {
                                const item = routeMap[m.key] as RouteMapValue
                                const Component = item.component
                                return <Route key={m.key} path={item.path} element={<Component />} />
                            })}
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </Suspense>
                </Layout.Content>
            </Layout>
        </Layout>
    )
}

export default Home
