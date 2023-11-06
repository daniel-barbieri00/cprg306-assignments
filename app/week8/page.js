"use client";

import React, { useState } from 'react';
import { useUserAuth } from "../week8/_utils/auth-context";
import Link from 'next/link';
import shoppingList from '../week8/shopping-list/page.js'; // Import the shopping list component

const LandingPage = () => {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleGitHubSignIn = async () => {
        await gitHubSignIn();
    };

    const handleSignOut = async () => {
        await firebaseSignOut();
    };

    return (
        <div>
            {user ? (
                <div>
                    <p>Welcome, {user.displayName} ({user.email})</p>
                    <button onClick={handleSignOut}>Log Out</button>
                    <Link href="../week8/shopping-list">
                        Go to Shopping List
                    </Link>
                </div>
            ) : (
                <div>
                    <p>Please log in to access the application.</p>
                    <button onClick={handleGitHubSignIn}>Log In with GitHub</button>
                </div>
            )}
        </div>
    );
};

export default LandingPage;
