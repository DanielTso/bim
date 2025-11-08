'use client';

import { useState } from 'react';
import { Container, Section } from '@/components/layout';
import {
  Button,
  Input,
  Textarea,
  Select,
  Checkbox,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
  Skeleton,
  SkeletonCard,
  SkeletonText,
  Spinner,
  useToast,
} from '@/components/ui';

export default function ComponentsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const { addToast } = useToast();

  return (
    <div>
      <Section background="gray" padding="md">
        <Container>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Component Showcase</h1>
          <p className="text-lg text-gray-600">UI components for the TradeCareers platform</p>
        </Container>
      </Section>

      <Container>
        {/* Buttons */}
        <Section padding="lg">
          <h2 className="text-2xl font-bold mb-6">Buttons</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="tertiary">Tertiary Button</Button>
              <Button variant="danger">Danger Button</Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button isLoading>Loading</Button>
              <Button disabled>Disabled</Button>
              <Button
                leftIcon={
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                }
              >
                With Icon
              </Button>
            </div>
          </div>
        </Section>

        {/* Form Inputs */}
        <Section padding="lg">
          <h2 className="text-2xl font-bold mb-6">Form Inputs</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              helperText="We'll never share your email"
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
              error="Password must be at least 8 characters"
            />
            <Textarea
              label="Message"
              placeholder="Enter your message"
              rows={4}
              helperText="Maximum 500 characters"
            />
            <Select
              label="Select Trade"
              options={[
                { value: 'electrical', label: 'Electrical' },
                { value: 'plumbing', label: 'Plumbing' },
                { value: 'hvac', label: 'HVAC' },
                { value: 'carpentry', label: 'Carpentry' },
              ]}
              placeholder="Choose a trade"
              value={selectValue}
              onChange={(e) => setSelectValue(e.target.value)}
            />
            <div className="md:col-span-2">
              <Checkbox
                label="I agree to the terms and conditions"
                helperText="Please read our terms before continuing"
                checked={checkboxValue}
                onChange={(e) => setCheckboxValue(e.target.checked)}
              />
            </div>
          </div>
        </Section>

        {/* Cards */}
        <Section padding="lg">
          <h2 className="text-2xl font-bold mb-6">Cards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card variant="default">
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>This is a default card variant</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Card content goes here with additional information.</p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Action</Button>
              </CardFooter>
            </Card>

            <Card variant="bordered" hoverable>
              <CardHeader>
                <CardTitle>Bordered Card</CardTitle>
                <CardDescription>Hover to see effect</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">This card has a border and hover effect.</p>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Elevated Card</CardTitle>
                <CardDescription>With shadow elevation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">This card has a shadow for depth.</p>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Modal */}
        <Section padding="lg">
          <h2 className="text-2xl font-bold mb-6">Modal</h2>
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>

          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
            <ModalHeader>
              <ModalTitle>Modal Title</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <p>This is a modal dialog. You can put any content here.</p>
              <p className="mt-4 text-gray-600">
                Press ESC or click outside to close, or use the buttons below.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button variant="tertiary" onClick={() => setModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setModalOpen(false)}>Confirm</Button>
            </ModalFooter>
          </Modal>
        </Section>

        {/* Loading States */}
        <Section padding="lg">
          <h2 className="text-2xl font-bold mb-6">Loading States</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Spinners</h3>
              <div className="flex items-center gap-4">
                <Spinner size="sm" />
                <Spinner size="md" />
                <Spinner size="lg" />
                <Spinner size="xl" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Skeleton Loaders</h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
                <div>
                  <SkeletonText lines={4} />
                </div>
                <SkeletonCard />
              </div>
            </div>
          </div>
        </Section>

        {/* Toast Notifications */}
        <Section padding="lg">
          <h2 className="text-2xl font-bold mb-6">Toast Notifications</h2>
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => addToast('Success! Your changes have been saved.', 'success')}>
              Success Toast
            </Button>
            <Button onClick={() => addToast('Error! Something went wrong.', 'error')}>
              Error Toast
            </Button>
            <Button onClick={() => addToast('Warning! Please check your input.', 'warning')}>
              Warning Toast
            </Button>
            <Button onClick={() => addToast('Info: New features are available.', 'info')}>
              Info Toast
            </Button>
            <Button
              onClick={() =>
                addToast('Action required!', 'info', 10000, {
                  label: 'View',
                  onClick: () => alert('Action clicked!'),
                })
              }
            >
              Toast with Action
            </Button>
          </div>
        </Section>
      </Container>
    </div>
  );
}
