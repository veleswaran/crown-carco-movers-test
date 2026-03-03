import { render, screen } from '@testing-library/react';
import Home from '../app/page';
import { describe, it, expect, vi } from 'vitest';

vi.mock('@/components/DrivingScene', () => ({
    default: () => <div data-testid="driving-scene-mock">Driving Scene</div>
}));

describe('Home Page', () => {
    it('renders the getting started heading', () => {
        render(<Home />);
        const headings = screen.getAllByText(/YOUR CARGO/i);
        expect(headings[0]).toBeInTheDocument();
    });
});
