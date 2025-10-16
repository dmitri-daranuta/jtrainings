import React, { useState, useMemo } from 'react';
import {
  Box,
  Button,
  Card,
  Dialog,
  Flex,
  Grid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  Text,
  TextInput,
  Tooltip,
} from '@sanity/ui';
import { set } from 'sanity';
import * as SanityIcons from '@sanity/icons';
import * as LucideIcons from 'lucide-react';
import 'devicon/devicon.min.css';
import useDeviconList from '@/sanity/lib/helpers/useDeviconList';

const ITEMS_PER_PAGE = 49;

export default function IconPicker({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState('sanity');
  const [searchTerm, setSearchTerm] = useState('');
  const [lucidePage, setLucidePage] = useState(0);
  const [sanityPage, setSanityPage] = useState(0);
  const [deviconPage, setDeviconPage] = useState(0);

  const handleSelect = (library, name) => {
    onChange(
      set({
        library,
        name,
        color: value?.color || '',
        colored: value?.colored ?? false,
      }),
    );
    setIsOpen(false);
  };

  const renderPreview = () => {
    if (!value?.name || !value?.library)
      return <Text muted>No icon selected</Text>;

    switch (value.library) {
      case 'sanity': {
        const Icon = SanityIcons[value.name];
        return Icon ? (
          <Icon fontSize={40} color={value?.color || undefined} />
        ) : (
          <Text muted>Invalid icon</Text>
        );
      }
      case 'lucide': {
        const Icon = LucideIcons[value.name];
        return Icon ? (
          <Icon size={35} color={value?.color || undefined} />
        ) : (
          <Text muted>Invalid icon</Text>
        );
      }
      case 'devicon': {
        return (
          <span
            className={`${value.name}${value?.colored ? ' colored' : ''}`}
            style={{
              fontSize: '40px',
              color: value?.colored ? undefined : value?.color || undefined,
            }}
          />
        );
      }
      default:
        return <Text muted>Invalid icon</Text>;
    }
  };

  const filteredSanity = useMemo(
    () =>
      Object.entries(SanityIcons).filter(([name]) =>
        name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [searchTerm],
  );

  const filteredLucide = useMemo(
    () =>
      Object.entries(LucideIcons).filter(([name]) =>
        name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [searchTerm],
  );

  const deviconList = useDeviconList();

  const filteredDevicon = useMemo(
    () =>
      deviconList.filter((name) =>
        name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [searchTerm, deviconList],
  );

  const paginatedSanity = useMemo(() => {
    const start = sanityPage * ITEMS_PER_PAGE;
    return filteredSanity.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredSanity, sanityPage]);

  const paginatedLucide = useMemo(() => {
    const start = lucidePage * ITEMS_PER_PAGE;
    return filteredLucide.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredLucide, lucidePage]);

  const paginatedDevicon = useMemo(() => {
    const start = deviconPage * ITEMS_PER_PAGE;
    return filteredDevicon.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredDevicon, deviconPage]);

  const totalSanityPages = Math.ceil(filteredSanity.length / ITEMS_PER_PAGE);
  const totalLucidePages = Math.ceil(filteredLucide.length / ITEMS_PER_PAGE);
  const totalDeviconPages = Math.ceil(filteredDevicon.length / ITEMS_PER_PAGE);

  return (
    <Stack space={3}>
      <Card padding={3} shadow={1} radius={2}>
        <Flex align="center" justify="space-between">
          <Box>{renderPreview()}</Box>
          <Flex align="center" gap={3}>
            {value?.library === 'devicon' && (
              <label
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <input
                  type="checkbox"
                  checked={value?.colored ?? true}
                  onChange={(e) =>
                    onChange(
                      set({ ...value, color: '', colored: e.target.checked }),
                    )
                  }
                />
                <Text size={1}>Colored</Text>
              </label>
            )}

            {(value?.library !== 'devicon' || value?.colored === false) && (
              <input
                type="color"
                value={value?.color || '#000000'}
                onChange={(e) =>
                  onChange(set({ ...value, color: e.target.value }))
                }
                style={{
                  width: '32px',
                  height: '32px',
                  border: 'none',
                  cursor: 'pointer',
                  background: 'none',
                  padding: 0,
                }}
                title="Pick icon color"
              />
            )}

            {value?.color &&
              (value?.library !== 'devicon' || value?.colored === false) && (
                <Button
                  text="Reset"
                  mode="ghost"
                  tone="critical"
                  onClick={() => onChange(set({ ...value, color: '' }))}
                  title="Reset icon color"
                />
              )}
            <Button text="Select Icon" onClick={() => setIsOpen(true)} />
          </Flex>
        </Flex>
      </Card>

      {isOpen && (
        <Dialog
          id="icon-picker"
          header="Choose an icon"
          onClose={() => setIsOpen(false)}
          width={1}
        >
          <Box padding={4}>
            <Stack space={4}>
              <TextInput
                placeholder="Search icons..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.currentTarget.value);
                  setLucidePage(0);
                  setSanityPage(0);
                  setDeviconPage(0);
                }}
              />

              <TabList space={2}>
                <Tab
                  aria-controls="sanity-content"
                  icon={SanityIcons.BookmarkIcon}
                  id="sanity-tab"
                  label="Sanity"
                  onClick={() => setId('sanity')}
                  selected={id === 'sanity'}
                  space={2}
                />
                <Tab
                  aria-controls="lucide-content"
                  icon={SanityIcons.BookmarkIcon}
                  id="lucide-tab"
                  label="Lucide"
                  onClick={() => setId('lucide')}
                  selected={id === 'lucide'}
                  space={2}
                />
                <Tab
                  aria-controls="devicon-content"
                  icon={SanityIcons.BookmarkIcon}
                  id="devicon-tab"
                  label="Devicon"
                  onClick={() => setId('devicon')}
                  selected={id === 'devicon'}
                  space={2}
                />
              </TabList>

              <TabPanel
                aria-labelledby="sanity-tab"
                hidden={id !== 'sanity'}
                id="sanity-content"
              >
                <Grid columns={7} gap={3}>
                  {paginatedSanity
                    .filter(([name]) => name !== 'icons' && name !== 'Icon')
                    .map(([name, Icon]) => (
                      <Tooltip key={name} content={name} placement="top" portal>
                        <Card
                          key={name}
                          padding={1}
                          radius={2}
                          shadow={1}
                          style={{ cursor: 'pointer', textAlign: 'center' }}
                          onClick={() => handleSelect('sanity', name)}
                        >
                          <div align="center">
                            <Icon fontSize={40} />
                          </div>
                        </Card>
                      </Tooltip>
                    ))}
                </Grid>
                <Flex justify="center" align="center" marginTop={4} gap={2}>
                  <Button
                    text="Previous"
                    disabled={sanityPage === 0}
                    onClick={() => setSanityPage((p) => Math.max(p - 1, 0))}
                  />
                  <Text>
                    Page {sanityPage + 1} of {totalSanityPages}
                  </Text>
                  <Button
                    text="Next"
                    disabled={sanityPage >= totalSanityPages - 1}
                    onClick={() =>
                      setSanityPage((p) =>
                        Math.min(p + 1, totalSanityPages - 1),
                      )
                    }
                  />
                </Flex>
              </TabPanel>

              <TabPanel
                aria-labelledby="lucide-tab"
                hidden={id !== 'lucide'}
                id="lucide-content"
              >
                <Grid columns={7} gap={3}>
                  {paginatedLucide.map(([name, Icon]) => (
                    <Tooltip key={name} content={name} placement="top" portal>
                      <Card
                        padding={3}
                        radius={2}
                        shadow={1}
                        style={{ cursor: 'pointer', textAlign: 'center' }}
                        onClick={() => handleSelect('lucide', name)}
                      >
                        <div align="center">
                          <Icon size={30} />
                        </div>
                      </Card>
                    </Tooltip>
                  ))}
                </Grid>
                <Flex justify="center" align="center" marginTop={4} gap={2}>
                  <Button
                    text="Previous"
                    disabled={lucidePage === 0}
                    onClick={() => setLucidePage((p) => Math.max(p - 1, 0))}
                  />
                  <Text>
                    Page {lucidePage + 1} of {totalLucidePages}
                  </Text>
                  <Button
                    text="Next"
                    disabled={lucidePage >= totalLucidePages - 1}
                    onClick={() =>
                      setLucidePage((p) =>
                        Math.min(p + 1, totalLucidePages - 1),
                      )
                    }
                  />
                </Flex>
              </TabPanel>

              <TabPanel
                aria-labelledby="devicon-tab"
                hidden={id !== 'devicon'}
                id="devicon-content"
              >
                <Grid columns={7} gap={3}>
                  {paginatedDevicon.map((name) => (
                    <Tooltip key={name} content={name} portal>
                      <Card
                        key={name}
                        padding={3}
                        radius={2}
                        shadow={1}
                        style={{ cursor: 'pointer', textAlign: 'center' }}
                        onClick={() => handleSelect('devicon', name)}
                      >
                        <span
                          className={`${name}`}
                          style={{ fontSize: '40px' }}
                        />
                      </Card>
                    </Tooltip>
                  ))}
                </Grid>
                <Flex justify="center" align="center" marginTop={4} gap={2}>
                  <Button
                    text="Previous"
                    disabled={deviconPage === 0}
                    onClick={() => setDeviconPage((p) => Math.max(p - 1, 0))}
                  />
                  <Text>
                    Page {deviconPage + 1} of {totalDeviconPages}
                  </Text>
                  <Button
                    text="Next"
                    disabled={deviconPage >= totalDeviconPages - 1}
                    onClick={() =>
                      setDeviconPage((p) =>
                        Math.min(p + 1, totalDeviconPages - 1),
                      )
                    }
                  />
                </Flex>
              </TabPanel>
            </Stack>
          </Box>
        </Dialog>
      )}
    </Stack>
  );
}
