import { StringInputProps, set } from 'sanity';
import { Stack, Button, Grid, Label, Text } from '@sanity/ui';
import { createElement, useCallback } from 'react';
import { TYPES } from '@/sanity/schemaTypes/postType';

export function SelectorFieldInput(props: StringInputProps) {
  const { value, onChange } = props;

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const nextValue = event.currentTarget.value;
      onChange(set(nextValue));
    },
    [onChange],
  );

  return (
    <Grid columns={TYPES.length} gap={3}>
      {TYPES.map((type) => (
        <Button
          key={type.value}
          value={type.value}
          mode={value === type.value ? `default` : `ghost`}
          tone={value === type.value ? `primary` : `default`}
          onClick={handleClick}
        >
          <Stack space={3} padding={2}>
            <Text size={4} align="right">
              {createElement(type.icon)}
            </Text>
            <Label>{type.title}</Label>
            <Text size={1} style={{ textWrap: 'wrap' }}>
              {type.description}
            </Text>
          </Stack>
        </Button>
      ))}
    </Grid>
  );
}
